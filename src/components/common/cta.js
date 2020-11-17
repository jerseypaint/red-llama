import React from "react"
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll'

import Section from "./section"
import {StyledLink} from "../common/styledLink"


const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 0 4rem 1rem;
    
     a {
        font-size: 4rem;
    }
`

const CTA = props => (
    <Section>
        <Container>
            <ScrollAnimation animateIn="fadeInUp">
                <StyledLink to={`/contact`}>Let's Talk</StyledLink>
            </ScrollAnimation>
        </Container>       
    </Section>
)

export default CTA