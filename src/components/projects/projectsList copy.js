import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import { GridContainer } from "../common/gridContainer"
import Section from "../common/section"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectsSection = styled(Section)`
    padding-top: 0;

    .slick-slider {
        grid-column: span 8;

        &:first-of-type {
            grid-column: span 4;
            align-self: center;

            .slick-list {
                text-align: left;
                font-family: 'Maven Pro','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
                font-weight: bold;
                font-size: 4em;
                perspective: 100vw;

                .slick-track {
                    transform-style: preserve-3d;
                }

                .slick-slide {
                    opacity: .3;
                    padding: 0;
                    line-height: 1;
                    transform: rotateY(45deg) translateZ(0) scale(1);
                    transform-origin: left center;
                    transform-style: preserve-3d;
                    will-change: transform;
                    transition: all 1.5s cubic-bezier(.075,.82,.165,1);
                    
                    &.slick-center {
                        color: red;
                        opacity: 1;
                        transform: rotateY(0deg) translateZ(0) scale(1);
                    }
                }
            }
        }
    }
`

export const ProjectsList = (props) => {

    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()

    const slider1 = useRef()
    const slider2 = useRef()

    const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        className: "center",
        centerPadding: "0px",
        focusOnSelect: true
      }

    const settings2 = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <ProjectsSection>
            <GridContainer>
                <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)} {...settings1}>
                     {props.projects.map(project => (
                        <div>{project.node.frontmatter.title}</div>
                    ))}
                </Slider>
                <Slider {...settings2} asNavFor={nav1} ref={slider2 => setNav2(slider2)}>
                    {props.projects.map(project => (
                        <div><img src={project.node.frontmatter.featuredImage.childImageSharp.fluid.src} /></div>
                    ))}
                </Slider>
            </GridContainer>
        </ProjectsSection>
    )
}

