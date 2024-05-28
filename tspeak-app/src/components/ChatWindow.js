import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ChatWindowContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled(motion.div)`
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 60%;
  word-wrap: break-word;

  &.sent {
    background-color: #dcf8c6;
    align-self: flex-end;
  }

  &.received {
    background-color: #fff;
    align-self: flex-start;
  }
`;

const ChatWindow = () => {
  const { chatId } = useParams();
  const messages = [
    { id: 1, sender: 'Ali', text: 'Merhaba!', chatId: 1 },
    { id: 2, sender: 'Ben', text: 'Selam Ali!', chatId: 1 },
    { id: 3, sender: 'Ayşe', text: 'Nasılsın?', chatId: 2 },
  ].filter(message => message.chatId === parseInt(chatId));

  return (
    <ChatWindowContainer>
      {messages.map(message => (
        <Message
          key={message.id}
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className={message.sender === 'Ben' ? 'sent' : 'received'}
        >
          <p>{message.text}</p>
        </Message>
      ))}
    </ChatWindowContainer>
  );
};

export default ChatWindow;
