import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../styles/theme"

const LinkWrapper = styled(Link)`
    position: relative;
    display: inline-block;
    padding-right: 2px;
    color:${props => props.theme.textColor};
    font-size: 1.2rem;
    line-height: 1.2;
    text-decoration: none;
    padding-bottom: 1.5px;
    cursor: pointer;
    
    &:hover {
        background-position: 0 calc(100% - 1.5px);
        padding-bottom: 3px;
    }
`

export const StyledLink = props => {
    return (
        <LinkWrapper to={props.to} css={props.css}>
            <span>{props.children}</span>
        </LinkWrapper>)
}