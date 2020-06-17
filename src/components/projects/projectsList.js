import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"
import media from "../../styles/media"
import Section from "../common/section"
import { StyledLink } from "../common/styledLink"
import { ChevronCircleRight } from "../common/icons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectsWrapper = styled.div`
    .slick-slider {
        .slick-slide {
            position: relative;
            padding-right: 2rem;

            img {
                max-width: 100%;
                margin: 0;
                margin-left: auto;
                object-fit: cover;
                object-position: left;
            }

            &:nth-of-type(3n+1) {
            img {
                height: 44.75rem;
                max-height: 100vh;
                }
            }

            &:nth-of-type(3n+2) {
            img {
                height: 26rem;
                }
            }

            &:nth-of-type(3n+3) {
            img {
                height: 35.25rem;
                }
            }
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;

    img {
        border: 6px solid ${props => props.color};
    }

    a {
        position: absolute;
        top: 18px;
        right: 18px;
        padding: 3px;
        border-radius: 100%;
        font-size: 5rem;
        line-height: 1;
        color: #fff;
        background-color: ${props => props.color};
        opacity: 0;
        transition: all 1.5s cubic-bezier(.075,.82,.165,1);
    }

    &:hover {
        a {
            opacity: 1;
        }
    }
`


const InnerSlide = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr min-content;
`

const TextWrapper = styled.div`
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    margin-left: .5rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    white-space: nowrap;
    transform: rotate(180deg);

    h2 {
        margin-bottom: 0;
    }

    p {
        margin-bottom: 5px;
    }

    
`
export const ProjectsList = (props) => {
    const [color, setColor] = useState(`transparent`)

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1.7
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1.4
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1.2
                }
            }
          ]
    }

    return (
        <ProjectsWrapper >
            <Slider {...settings}>
                {props.projects.map(project => (
                    <div>
                    <InnerSlide>
                        <ImageWrapper  color={project.node.frontmatter.color}>
                            <img src={project.node.frontmatter.featuredImage.childImageSharp.fluid.src} />
                            <Link to={project.node.frontmatter.path}><ChevronCircleRight /></Link>
                        </ImageWrapper>
                        <TextWrapper>
                            <p>{project.node.frontmatter.tags[0]}-</p>
                            <h2>{project.node.frontmatter.title}</h2>
                        </TextWrapper>
                        
                    </InnerSlide>
                    </div>
                ))}
            </Slider>
        </ProjectsWrapper>
    )
}

