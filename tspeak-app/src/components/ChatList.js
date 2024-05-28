import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ChatListContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-right: 1px solid #ccc;
  height: 100vh;
  overflow-y: auto;
`;

const ChatItem = styled(motion.div)`
  display: block;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const ChatList = () => {
  const chats = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ayşe' },
    { id: 3, name: 'Mehmet' },
  ];

  return (
    <ChatListContainer>
      {chats.map(chat => (
        <ChatItem
          key={chat.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/chat/${chat.id}`}>
            {chat.name}
          </Link>
        </ChatItem>
      ))}
    </ChatListContainer>
  );
};

export default ChatList;
