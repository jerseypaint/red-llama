import { Link } from "gatsby"
import styled from "styled-components"
import media from "../../../styles/media"
import theme from "../../../styles/theme"

export const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  display: flex;
  text-decoration: none;
  transition: all 1.5s cubic-bezier(.075,.82,.165,1);
  transform: translateZ(0);
  backface-visibility: hidden;
  
    &:hover {
        transform: scale(1.05);
        &:after {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

    &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 600ms;
    }

  ${media.tablet`
    margin: 0 1rem;
  `}
`
