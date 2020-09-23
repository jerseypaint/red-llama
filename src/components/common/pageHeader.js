import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"

const TitleWrapper = styled.div`
    margin: 0 auto;
    padding: calc(80px + 3rem) 0;
    max-width: 800px;
    height: 100%;
    
    h2 {
        font-size: 2rem;
    }

    ${media.tablet`
        padding: 8rem 0 0;
        h2 {
            font-size: 3rem;
        }
    `}
`


export const PageHeader = props => {

    const bgImageStyle = css`
        background-image: url(${props.bgImage});
        background-size: cover;

        div {
            height: calc(100vh - 8rem);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 100%;
        }
`
    return (
        <Section css={props.bgImage ? bgImageStyle : undefined}>
                <TitleWrapper>
                    <h2>{props.title}</h2>
                    {props.subtitle && 
                        <p>{props.subtitle}</p>
                    }

                </TitleWrapper>
        </Section>
    )
}
