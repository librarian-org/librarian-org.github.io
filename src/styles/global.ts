import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-size: 14px;
    color: rgba(255,255,255,0.57);
    background: #222;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
  }

  h3 {
    font-weight: 600;
    line-height: 1.25;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgba(255,255,255,0.57);

    &:hover {
      text-decoration: underline;
    }
  }

  .hide-sm-up {
    display: none !important;

    @media (max-width: 992px) {
      display: flex !important;
    }
  }

  .hide-sm-down {
    display: flex !important;

    @media (max-width: 992px) {
      display: none !important;
    }
  }

  .moving {
    width: 100%;
    position: fixed;
    background: #2c2c2c;
    height: 4em;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
`;
