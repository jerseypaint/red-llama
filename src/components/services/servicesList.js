import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../../styles/theme"

import media from "../../styles/media"
import Section from "../common/section"

const DescriptionWrapper = styled.div`
    flex: 1 1;
    max-width: 600px;
    margin: 0 auto;
`

const ServicesSection = styled(Section)`
    padding: 0;
`

const ImageWrapper = styled.div`
    flex: 1 1;
    position: relative;
    padding: 2rem;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 4rem 1rem;

    img {
        position: relative;
        display: block;
        margin: 0;
    }

    &:nth-of-type(2n+2) {
        flex-direction: row-reverse;
    }
`
export const ServicesList = (props) => {
    return (
        <ServicesSection>
            {props.services.map(service => (      
                <FlexWrapper>
                    <DescriptionWrapper>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </DescriptionWrapper>
                    <ImageWrapper>
                        <img src={service.image.childImageSharp.fluid.src} />
                    </ImageWrapper>
                </FlexWrapper>        
            ))}
        </ServicesSection>
    )
}

