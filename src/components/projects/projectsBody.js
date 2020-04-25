import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"
import { GridContainer } from "../common/gridContainer"


const Sidebar = styled.div`
    grid-column: 1 / span 4;
    
    ${media.tablet`
    grid-column: 2 / span 3;
    `}
`
const Article = styled.article`
    margin: 0 auto;
    max-width: 600px;
    grid-column: 1 / span 4;

    ${media.tablet`
    grid-column: 5 / span 4;
    `}
`

export const ProjectsBody = props => {
    return (
        <Section>
            <GridContainer>
                <Sidebar>
                    <ul>
                    {props.tags.map(tag => (          
                        <li>{tag}</li>
                    ))}
                    </ul>
                </Sidebar>
                <Article dangerouslySetInnerHTML={{ __html: props.html }}>
                </ Article>
            </GridContainer>
        </Section>
    )
}
