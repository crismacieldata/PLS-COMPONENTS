import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  #root {
    height: 100vh;
  }

  code {
    display: flex;
    background-color: red;
    border-radius: 5px;
    padding: 5px;
    color: white;
    font-family: Arial, sans-serif;
  }

  body {
    color: var(--gray-800);
    font-size: 13px;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
  }

  a {
    text-decoration: none !important;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  hr {
    margin: 15px 0;
    border: 0;
    border-bottom: 1px solid var(--gray-300);

    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }

  input[type=text],
  input[type=email], input[type=password], select, .input {
    display: flex;
    width: 100%;
    border: 1px solid var(--gray-200);
    color: var(--grey-color);
    height: 40px;
    border-radius: 5px;
    padding: 0 15px;

    &:focus {
      outline: 1px solid var(--gray-300);
    }
  }
  
  textarea {
    display: flex;
    width: 100%;
    border: 1px solid var(--gray-200);
    color: var(--grey-color);
    border-radius: 5px;
    padding: 0 15px;

    &:focus {
      outline: 1px solid var(--gray-300);
    }
  }

  button, button:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  .shadow-gray {
    box-shadow: 0 0 8px rgba(154, 154, 154, 0.45);
  }

  .form-error {
    color: var(--red);
    padding: 3px 3px 0;
    font-size: 12px;
  }

  .modal-open, .no-scroll {
    overflow: hidden;
  }

  .right {
    text-align: right;
  }


  .modal-primary-button {
    background: var(--blue) !important;
    color: var(--white) !important;
    font-size: .8rem !important;
  }

  .modal-secondary-button {
    background: var(--gray-300) !important;
    color: var(--blue) !important;
    font-size: .8rem !important;
  }

  .modal-title {
    color: var(--gray-500) !important;
    font-size: 21px !important;
  }

  .swal2-container {
    z-index: 10000;
  }

  .modal-content {
    font-size: 13px !important;
    text-align: left;

    & table tbody tr td strong {
      padding-left: 5px;
    }

    & h3, p {
      margin: 15px 0;
    }

    & h3 {
      text-align: center;
    }
  }

  :root {
    --blue: #124E91;
    --blue-middle: #3699FF;
    --brown: #CCAF65;
    --gray-100: #F5F5F5;
    --gray-200: #EEEEEE;
    --gray-300: #E0E0E0;
    --gray-400: #BDBDBD;
    --gray-500: #9E9E9E;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
    --green: #609686;
    --green-middle: #56c6d0;
    --green-light: #DCE681;
    --red-light: #F6DFDF;
    --red-middle: #EBB7B7;
    --red: #FF0000;
    --white: #fff;
    
    //backgrounds
    --bg-gray-100: var(--gray-100);
    --bg-gray-200: var(--gray-200);
    --bg-gray-300: var(--gray-300);
    --bg-gray-400: var(--gray-400);
    
    //borders
    --border-accordion: var(--gray-300);
    --border-gray: var(--gray-200);
    --border-card: var(--gray-300);

    //color
    --text-blue-middle: var(--blue-middle);
    --text-gray-800: var(--gray-800);
    --text-gray-900: var(--gray-900);
    
  }
`;
