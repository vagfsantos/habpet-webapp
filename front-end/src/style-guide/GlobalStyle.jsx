import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');

  body {
    background-color: #D9F1FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Baloo Bhaijaan 2", sans-serif;
  }
`;