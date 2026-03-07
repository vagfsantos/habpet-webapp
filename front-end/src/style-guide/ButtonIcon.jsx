import styled from "styled-components";
import { COLORS } from "./Colors";
import { FONTS } from "./Fonts";

export const ButtonIcon = styled.button` 
  background:${COLORS.YELLOW};
  border-radius: ${props => props.$borderRadius};
  color: ${COLORS.WHITE};
  font-size: 20px;
  font-weight: 700;
  font-family: ${FONTS.SECONDARY};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;