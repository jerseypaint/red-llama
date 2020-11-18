import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll'

import Section from "../common/section"
import media from "../../styles/media"

const FlexGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    ${media.tablet`
        display: flex;
        flex-wrap: wrap;
    `}

`

const ServiceItem = styled.div`
    padding: 30px;

    p {
        font-size: 16px;
    }
    ${media.tablet`
        width: calc(33.33% - 15px);
    `}
`

const StyledSection = styled(Section)`
    padding-bottom: 0;
`



export const ServicesList = ({services}) => {

    return (
        <Section>
            <FlexGrid>
                {services.map(service => (        
                    <ServiceItem>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </ScrollAnimation>
                    </ServiceItem>
                ))}
            </FlexGrid>
        </Section>
    )
}
