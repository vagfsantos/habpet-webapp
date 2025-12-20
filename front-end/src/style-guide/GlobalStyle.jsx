import { createGlobalStyle } from "styled-components"
import { FONTS } from "./Fonts";
import { COLORS } from "./Colors";

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${COLORS.BLUE_LIGHT};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${FONTS.DEFALT};
  }
`;