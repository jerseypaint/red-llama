import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from 'react-animate-on-scroll'

import Section from "./section"
import {StyledLink} from "../common/styledLink"


const BigLinkWrapper = styled.div`
     a {
        font-size: 4rem;
        margin-left: 10%;
    }
`

const CTA = props => (
    <Section>
        <BigLinkWrapper>
            <ScrollAnimation animateIn="fadeInUp">
                <StyledLink>Let's Talk</StyledLink>
            </ScrollAnimation>
        </BigLinkWrapper>       
    </Section>
)

export default CTA