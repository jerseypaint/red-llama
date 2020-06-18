import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"
import { GridContainer } from "../common/gridContainer"
import { CheckCircleListItem } from "../common/icons"

const Sidebar = styled.div`
    grid-column: 1 / span 4;

    ul {
        
        .animated {
            font-weight: bold;
            &:last-of-type {
                border: none;
            }
        }
        li {
            margin: 1rem 0;
            padding: 1rem 2rem;
            font-size: 1.4rem;
            line-height: 1;
            font-weight: bold;
        }
    }

    ${media.tablet`
        grid-column: 1 / span 12;
    `}

    ${media.desktop`
        grid-column: 2 / span 3;
        border-right: 6px solid black;
    `}
`
const Article = styled.article`
    margin: 0 auto;
    max-width: 600px;
    grid-column: 1 / span 4;

    ${media.tablet`
        grid-column: 1 / span 12;

    `}

    ${media.desktop`
        grid-column: 5 / span 6;
        margin-right: auto;
    `}
`

export const ProjectsBody = props => {
    return (
        <Section>
            <GridContainer>
                <Sidebar>
                    <ul className="fa-ul">
                    {props.tags.map(tag => (          
                        <li><CheckCircleListItem />{tag}</li>
                    ))}
                    </ul>
                </Sidebar>
                <Article dangerouslySetInnerHTML={{ __html: props.html }}>
                </ Article>
            </GridContainer>
        </Section>
    )
}
