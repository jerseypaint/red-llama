import { Link } from "gatsby"
import styled from "styled-components"
import media from "../../../styles/media"
import theme from "../../../styles/theme"

export const NavLink = styled(Link)`
  position: relative;
  text-transform: capitalize;
  color: #000;
  z-index: 3;
  padding-bottom: 1.5px;
  &:hover {
    background-position: 0 calc(100% - 1.5px);
    padding-bottom: 3px;
  }
  ${media.tablet`
    margin: 0 1rem;
  `}
`
