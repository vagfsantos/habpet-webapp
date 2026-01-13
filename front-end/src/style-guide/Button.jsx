import styled from "styled-components";
import { COLORS } from "./Colors";

export const Button = styled.button` 
  background:${COLORS.YELLOW};
  border-radius: ${props => props.$borderRadius};
  color: ${COLORS.WHITE};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  width: ${props => props.$width};
  height: ${props => props.$height};
`;