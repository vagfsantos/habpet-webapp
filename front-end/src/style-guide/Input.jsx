import styled from "styled-components";
import { FONTS } from "./Fonts";
import { COLORS } from "./Colors";

export const Input = styled.input`
  border: 1px solid ${COLORS.BLUE_EXTRA_BOLD};
  width: 100%;
  max-width: 372px;
  height: 44px;
  line-height: 44px;
  padding: 0 12px;
  font-family: ${FONTS.LATO};
  border-radius: 8px;
  outline: none;
  
  ::placeholder {
    color: ${COLORS.GREY_LIGHT};
    font-weight: 300;
  }
`;