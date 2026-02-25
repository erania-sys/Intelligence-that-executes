import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Brackett Agency AI assistant. I can help you understand our intelligence-powered strategic consulting services. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          session_id: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setSessionId(data.session_id);
      
      const assistantMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting. Please try again or contact us directly at erania@brackett.agency.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What makes Brackett different?",
    "Tell me about ASEMAP",
    "What is a fractional CMO?",
    "How can you help my business?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] text-[#0A0A0A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${isOpen ? 'hidden' : ''}`}
        data-testid="chat-toggle-btn"
        aria-label="Open chat"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[560px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E9ECEF]"
            data-testid="chat-window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center">
                  <Sparkles size={20} className="text-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Brackett AI Assistant</h3>
                  <p className="text-white/60 text-xs">Powered by Predictive Intelligence</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="chat-close-btn"
                aria-label="Close chat"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF8]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-[#0A0A0A]' 
                      : 'bg-gradient-to-br from-[#C9A961] to-[#8B7340]'
                  }`}>
                    {message.role === 'user' 
                      ? <User size={16} className="text-white" />
                      : <Bot size={16} className="text-[#0A0A0A]" />
                    }
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-[#0A0A0A] text-white rounded-tr-sm'
                      : 'bg-white text-[#0A0A0A] border border-[#E9ECEF] rounded-tl-sm shadow-sm'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center">
                    <Bot size={16} className="text-[#0A0A0A]" />
                  </div>
                  <div className="bg-white border border-[#E9ECEF] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-[#C9A961]" />
                      <span className="text-sm text-[#6C757D]">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (show only if few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2 bg-[#F8F9FA] border-t border-[#E9ECEF]">
                <p className="text-xs text-[#6C757D] mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question);
                        inputRef.current?.focus();
                      }}
                      className="text-xs bg-white border border-[#E9ECEF] text-[#0A0A0A] px-3 py-1.5 rounded-full hover:border-[#C9A961] hover:bg-[#C9A961]/5 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#E9ECEF]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/20 transition-colors"
                  disabled={isLoading}
                  data-testid="chat-input"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  data-testid="chat-send-btn"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-[#6C757D] text-center mt-2">
                AI-powered by OSG Analytics Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
