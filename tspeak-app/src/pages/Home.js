import React from 'react';
import ChatList from '../components/ChatList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <ChatList />
    </div>
  );
};

export default Home;
