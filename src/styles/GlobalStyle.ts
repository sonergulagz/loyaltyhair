import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 5rem 0;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &.primary {
      background: #1a76d2;
      color: white;
      
      &:hover {
        background: #1557a0;
      }
    }

    &.secondary {
      background: white;
      color: #1a76d2;
      border: 2px solid #1a76d2;
      
      &:hover {
        background: #1a76d2;
        color: white;
      }
    }
  }
`

export default GlobalStyle 