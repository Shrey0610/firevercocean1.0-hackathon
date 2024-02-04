// ChatApp.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App5 from './App5'; // Import the App component
import './App3.css';

const ChatApp = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiResponse, setAPIResponse] = useState('');

  useEffect(() => {
    // Fetch initial chat messages or load from storage
    // For simplicity, I'll just fetch a welcome message here
    fetchChatMessages('Hello, how can I help you today?');
    // Fetch API response from the backend
    fetchAPIResponse();
  }, []);

  const fetchChatMessages = async (message) => {
    try {
      const response = await axios.post('/api/generate', { message });
      const newMessages = [
        ...chatMessages,
        { text: message, type: 'user' },
        { text: response.data.text || 'AI response missing', type: 'ai' },
      ];
      setChatMessages(newMessages);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      const errorMessage = 'Error fetching AI response';
      const newMessages = [...chatMessages, { text: message, type: 'user' }, { text: errorMessage, type: 'ai' }];
      setChatMessages(newMessages);
    }
  };

  const fetchAPIResponse = () => {
    // Fetch API response from your backend
    // Update the API endpoint to match your actual endpoint
    axios.get('http://localhost:9004/testapi')
      .then((res) => setAPIResponse(res.data))
      .catch((error) => console.error('Error fetching API response:', error));
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessages = [...chatMessages, { text: inputMessage, type: 'user' }];
    setChatMessages(newMessages);
    setInputMessage('');

    // Fetch AI response
    fetchChatMessages(inputMessage);
  };

  return (
    <div className="chat-app">
      <App5 apiResponse={apiResponse} /> {/* Render the App component with the API response */}
      <section className="chat">
        <h2>Chat with AI</h2>
        <div className="chat-box">
          {chatMessages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
