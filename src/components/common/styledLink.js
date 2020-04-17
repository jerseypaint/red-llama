import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import theme from "../../styles/theme"

import { ChevronCircleRight } from "../common/icons"

const LinkWrapper = styled(Link)`
    position: relative;
    display: inline-block;
    padding-right: 2px;
    color:#fff;
    font-size: 1.2rem;
    text-decoration: none;
    --fa-secondary-color: transparent;

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
`

export const StyledLink = props => {
    return (<LinkWrapper to={props.to} css={props.css}>
         <ChevronCircleRight /> {props.children}
    </LinkWrapper>)
}