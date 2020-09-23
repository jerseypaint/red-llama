import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../common/section"
import { GridContainer } from "../common/gridContainer"
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
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </ServiceItem>
                ))}
            </FlexGrid>
        </Section>
    )
}
