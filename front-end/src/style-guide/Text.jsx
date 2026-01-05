import styled from "styled-components";
import { FONTS } from "./Fonts";


export const Text = styled.p`
  color: ${props => props.$color};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$fontWeight};
  font-family: ${FONTS.LATO};
`;