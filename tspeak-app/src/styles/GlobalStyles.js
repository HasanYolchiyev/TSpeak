import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ece5dd;
    display: flex;
    height: 100vh;
  }

  #root {
    display: flex;
    width: 100%;
  }

  .home-page, .chat-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export default GlobalStyles;
