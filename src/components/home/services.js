import React from "react"
import { StyledLink } from "../common/styledLink"
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll'

import media from "../../styles/media"
import theme from "../../styles/theme"
import { GridContainer } from "../common/gridContainer"
import Section from "../common/section"
import { CheckCircleListItem } from "../common/icons"

const StyledGridContainer = styled(GridContainer)`
    align-items: center;
    justify-items: center;
`

const ContentWrapper = styled.div`
    grid-column: 1 / span 4;

    ${media.tablet`
        grid-column: 2 / span 6;
    `}
`

const Content = styled.div`

`

const ListWrapper = styled.div`
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
        grid-column: 8 / span 5;
    `}
`

const Services = props => (
    <Section>
        <StyledGridContainer>
            <ContentWrapper>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                        <p>{props.description}</p>
                        <StyledLink to={`/services`}>View Services</StyledLink>
                    </ScrollAnimation>
                </Content>
            </ContentWrapper>
            <ListWrapper>
                <ul className={'fa-ul'}>
                {props.services.map( service => (
                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                        <li><CheckCircleListItem />{service.title}</li>
                    </ScrollAnimation>
                ))}
                </ul>
            </ListWrapper>
        </StyledGridContainer>
    </Section>
)

export default Services