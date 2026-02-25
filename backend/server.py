from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Chat Models
class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

# Brackett Agency knowledge base for the chatbot
BRACKETT_SYSTEM_PROMPT = """You are an intelligent assistant for Brackett Agency, a strategic consulting firm that combines Fortune 500 experience with AI-powered predictive intelligence. Your role is to help website visitors understand Brackett's offerings and guide them toward the right solutions.

## About Brackett Agency
- **Tagline**: "Intelligence That Executes"
- **Target Clients**: Mid-market companies ($10M-$100M revenue) seeking strategic growth
- **Founder**: Erania Brackett, former Fortune 500 CMO with expertise in strategic marketing and customer intelligence

## Core Differentiator
Brackett Agency partners with OSG Analytics (Optimal Strategix Group) to provide enterprise-grade AI/ML-powered customer intelligence typically reserved for Fortune 500 companies. This includes:
- **ASEMAP**: Stanford-born, academically peer-reviewed methodology for predictive customer choice analysis
- **o360**: Advanced customer experience analytics platform
- **AI/ML Engine**: Real-time dashboards with predictive and prescriptive analytics

## Key Services

### 1. Signature Programs
- **Revenue Clarity System** (120 days): Identifies revenue leaks and growth opportunities using customer intelligence
- **Market Position Reset** (90 days): Transforms positioning from "me-too" to category leader
- **Marketing Strategy & Execution** (90 days): Intelligence-driven marketing transformation
- **Customer Experience Intelligence** (90 days): Behavioral CX analytics to improve NPS and retention

### 2. Strategic Partnerships (Fractional Executive)
- **Fractional CSO**: Ongoing strategic leadership at a fraction of full-time cost
- **Fractional CMO**: Senior marketing leadership with intelligence capabilities
- Includes: Monthly strategy sessions, real-time dashboards, quarterly business reviews

### 3. Strategic Blindspot Audit
- Entry-level diagnostic to identify hidden opportunities
- Investment credited toward any full engagement
- Applies all three intelligence platforms to your business

## How to Guide Visitors
1. For general inquiries: Explain the intelligence advantage and how Brackett differs from traditional consulting
2. For specific problems: Recommend the most relevant program or service
3. For pricing questions: Explain that pricing is customized, and encourage scheduling a consultation
4. Always be helpful, professional, and concise
5. If asked about competitors or specific pricing, guide them to schedule a consultation

## Contact
- Email: erania@brackett.agency
- Consultation: Encourage visitors to request a consultation via the website form

Be conversational, helpful, and focused on understanding visitor needs. Ask clarifying questions when needed to recommend the right solution."""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Chat endpoint for the AI assistant
@api_router.post("/chat", response_model=ChatResponse)
async def chat_with_assistant(request: ChatRequest):
    """Chat with the Brackett Agency AI assistant"""
    try:
        # Generate session ID if not provided
        session_id = request.session_id or str(uuid.uuid4())
        
        # Get chat history from database
        chat_history = await db.chat_sessions.find_one(
            {"session_id": session_id},
            {"_id": 0}
        )
        
        # Initialize LLM chat
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        chat = LlmChat(
            api_key=api_key,
            session_id=session_id,
            system_message=BRACKETT_SYSTEM_PROMPT
        ).with_model("openai", "gpt-4o")
        
        # Load previous messages if they exist
        if chat_history and chat_history.get('messages'):
            for msg in chat_history['messages']:
                if msg['role'] == 'user':
                    chat.messages.append({"role": "user", "content": msg['content']})
                else:
                    chat.messages.append({"role": "assistant", "content": msg['content']})
        
        # Send user message and get response
        user_message = UserMessage(text=request.message)
        response = await chat.send_message(user_message)
        
        # Store the conversation in database
        new_messages = []
        if chat_history and chat_history.get('messages'):
            new_messages = chat_history['messages']
        
        new_messages.append({
            "role": "user",
            "content": request.message,
            "timestamp": datetime.now(timezone.utc).isoformat()
        })
        new_messages.append({
            "role": "assistant", 
            "content": response,
            "timestamp": datetime.now(timezone.utc).isoformat()
        })
        
        # Update or insert session
        await db.chat_sessions.update_one(
            {"session_id": session_id},
            {
                "$set": {
                    "session_id": session_id,
                    "messages": new_messages,
                    "updated_at": datetime.now(timezone.utc).isoformat()
                }
            },
            upsert=True
        )
        
        return ChatResponse(response=response, session_id=session_id)
        
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        return ChatResponse(
            response="I apologize, but I'm having trouble processing your request. Please try again or contact us directly at erania@brackett.agency.",
            session_id=request.session_id or str(uuid.uuid4())
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()