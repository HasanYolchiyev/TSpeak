import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import Navbar from '../components/Navbar';

const socket = io('http://localhost:4000');

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'Ben',
      text,
      chatId: 1,
    };
    socket.emit('sendMessage', newMessage);
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-page">
      <Navbar />
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
    