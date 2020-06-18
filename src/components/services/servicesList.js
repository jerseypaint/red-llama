import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"

import Section from "../common/section"
import { GridContainer } from "../common/gridContainer"
import { CheckCircleListItem } from "../common/icons"
import ScrollAnimation from 'react-animate-on-scroll'
import media from "../../styles/media"

const ServicesSection = styled(Section)`
    padding: 0;
`

const DescriptionWrapper = styled.div`
    grid-column: 1 / span 12;

    ${media.desktop`
        grid-column: 1 / span 6;    
        max-width: 600px;
        margin: 0 auto;
  `}
`

const MetaWrapper = styled.div`
    grid-column: 1 / span 12;

    ul {
        margin: 0 auto;
        padding: 1rem 1rem 1rem 2rem;
        background-color: #fff;
        border: solid 6px black;
        max-width: 600px;
        display: flex;
        flex-wrap: wrap;

        li {
            margin: 1rem 1rem;
            padding: 1rem;
            font-size: 1.4rem;
            line-height: 1;
            font-weight: bold;
            width: 100%;
        }
    }

    ${media.tablet`
         ul {
            margin: 0 auto;
            padding: 2rem 2rem 2rem 4rem;

            li {
                width: calc(50% - 2rem);
            }
        }
    `}

    ${media.desktop`
        grid-column: 7 / span 6;

        ul {
            li {
                font-size: 1.6rem;
                width: 100%;
            }
        }
    `}

    ${media.widescreen`
        grid-column: 7 / span 6;

        ul {
            li {
                font-size: 1.4rem;
                width: calc(50% - 2rem);
            }
        }
    `}
`
const AlternatingContainer = styled.div`
    &:nth-of-type(2n+2) {
        
        ${media.desktop`
            ${DescriptionWrapper} {
                grid-column: 7 / span 6;
            }

            ${MetaWrapper} {
                grid-column: 1 / span 6;
            }
        `}
    }
`

const styledGrid = css`
    padding: 1rem;
    grid-auto-flow:dense;

    ${media.desktop`
        padding: 4rem;
    `}
`
export const ServicesList = (props) => {
    return (
        <ServicesSection>
            {props.services.map(service => (
                <AlternatingContainer>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">      
                        <GridContainer css={styledGrid}>
                            <DescriptionWrapper>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </DescriptionWrapper>
                            <MetaWrapper>
                                <ul className={`fa-ul`}>
                                    {service.subServices.map(
                                        subService => (
                                            <li><CheckCircleListItem />{subService}</li>
                                        )
                                    )}
                                </ul>
                            </MetaWrapper>
                        </GridContainer> 
                    </ScrollAnimation>
                </AlternatingContainer>       
            ))}
        </ServicesSection>
    )
}

