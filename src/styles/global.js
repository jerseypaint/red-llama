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
`