import styled from "@emotion/styled"
import media from "../../../styles/media"
import theme from "../../../styles/theme"

export const NavButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #fff;
  display: flex;

  &:after {
    content:'';
    position: absolute;
    bottom:0;
    left:0;
    width: 0%;
    height: 3px;
    background-color: ${theme.brand};
    transition: all 600ms ease-in-out;
  }

  &:hover {
    &:after {
        width: 100%;
    }
  }

  ${media.tablet`
    margin: 0 1rem;
  `}
`
