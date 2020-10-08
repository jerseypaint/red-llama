import React from "react"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor}; 
    } 

    p {
        font-size: 1.2rem;
        line-height: 1.4;
        letter-spacing: 0.8px;
    }

    a {
        text-decoration: none;
        border-bottom: 1px solid ${props => props.theme.textColor};
        color: ${props => props.theme.textColor};
        padding-bottom: 1.5px;

        &:hover {
            border-bottom: none;
            background-image: url(/images/squiggle-go.svg);
            background-position: 0 100%;
            background-size: auto 3px;
            background-repeat: repeat-x;
            padding-bottom: 3px;
        }
    }
`