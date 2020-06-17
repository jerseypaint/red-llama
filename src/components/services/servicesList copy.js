import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import theme from "../../styles/theme"

import media from "../../styles/media"
import Section from "../common/section"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const DescriptionWrapper = styled.div`

`

const ServicesSection = styled(Section)`
    padding-top: 0;
    position: relative;

    .slick-slider {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(4, 1fr);
      
        ${media.tablet`
          grid-gap: 28px;
          grid-template-columns: repeat(12, 1fr);
        `}

        .slick-list {
            grid-column: 1 / span 4;
            grid-row: 2;

            ${media.tablet`
                grid-column: 7 / span 6;
                grid-row: 1;
                align-self: center;
                position: sticky;
                top: 0;
          `}
        }

        .slick-dots {
            position: relative;
            text-align: left;
            font-family: 'Maven Pro','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
            font-weight: bold;
            font-size: 4em;
            grid-column: 1 / span 4;
            grid-row: 1;

            ${media.tablet`
                grid-column: 1 / span 6;
          `}

            li {
                display: block;
                height: auto;
                width: 100%;
                opacity: .3;
                padding: 0;
                line-height: 1;
                text-stroke: 2px #fff;
                -webkit-text-stroke: 2px #fff;
                transition: all 1.5s cubic-bezier(.075,.82,.165,1);
                color: transparent;

                &.slick-active {
                    color: #fff;
                    opacity: 1;
                } 
            } 
        }
    }
`

export const ServicesList = (props) => {
    const settings = {
        customPaging: function(i) {
            return (
                <a>
                    {props.services[i].title}
                </a>
            )
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        arrows: false,
        fade: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <ServicesSection>
            <Slider {...settings}>
                {props.services.map(service => (        
                    <DescriptionWrapper>
                        <p>{service.description}</p>
                    </DescriptionWrapper>
                ))}
            </Slider>
        </ServicesSection>
    )
}

