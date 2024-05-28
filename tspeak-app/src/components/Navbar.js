import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>T-Speak</h1>
    </NavbarContainer>
  );
};

export default Navbar;
