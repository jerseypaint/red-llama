import React from "react"
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll'

import Section from "./section"
import { ContactForm } from "../common/contactForm"

const ContactSection = styled(Section)`
    background-color: #EDDEA4;
`

const CTA = props => (
    <ContactSection>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                <h2>Let's Talk</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <ContactForm />
            </ScrollAnimation>
    </ContactSection>
)

export default CTA