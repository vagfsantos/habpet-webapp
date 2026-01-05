import styled from "styled-components";
import { FONTS } from "./Fonts";
import { NavLink } from "react-router";


export const Link = styled(NavLink)`
  color: ${props => props.$color};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$fontWeight};
  font-family: ${FONTS.LATO};
`;