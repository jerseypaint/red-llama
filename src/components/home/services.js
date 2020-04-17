import React from "react"
import { StyledLink } from "../common/styledLink"
import styled from "@emotion/styled"
import ScrollAnimation from 'react-animate-on-scroll'

import media from "../../styles/media"
import theme from "../../styles/theme"
import { GridContainer } from "../common/gridContainer"
import Section from "../common/section"

const StyledGridContainer = styled(GridContainer)`
    align-items: center;
    justify-items: center;
`

const ContentWrapper = styled.div`
    grid-column: 1 / span 4;

    ${media.tablet`
        grid-column: 2 / span 4;
    `}
`

const Content = styled.div`

`

const ListWrapper = styled.div`
 grid-column: 1 / span 4;

    ul {
        list-style: none;

        .animated {
            border-bottom: solid 1px ${theme.darkGrey2};
            font-weight: bold;
            &:last-of-type {
                border: none;
            }
        }
        li {
            margin: .5rem 0;
            padding: 1rem 2rem;
            font-size: 2.4rem;
            font-weight: bold;
        }
    }

    ${media.tablet`
        grid-column: 7 / span 6;
    `}
`

const Services = props => (
    <Section>
        <StyledGridContainer>
            <ContentWrapper>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp">
                        <p>{props.description}</p>
                        <StyledLink to={`/services`}>View Services</StyledLink>
                    </ScrollAnimation>
                </Content>
            </ContentWrapper>
            <ListWrapper>
                <ul>
                {props.services.map( service => (
                    <ScrollAnimation animateIn="fadeInUp">
                        <li>{service.title}</li>
                    </ScrollAnimation>
                ))}
                </ul>
            </ListWrapper>
        </StyledGridContainer>
    </Section>
)

export default Services