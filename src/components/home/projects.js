import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

import media from "../../styles/media"
import Section from "../common/section"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ProjectsList } from "../projects/projectsList"
import { GridContainer } from "../common/gridContainer"
import { ChevronCircleRight } from "../common/icons"
import ScrollAnimation from 'react-animate-on-scroll'

const ProjectsSection = styled(Section)`
    position: relative;
`

const ProjectWrapper = styled.div`
    padding: 0 1em;
    position: relative;

    &:nth-of-type(1) {
            grid-column: span 4;
        }

    &:nth-of-type(2) {
        grid-column: span 4;
    }

    &:nth-of-type(3) {
        grid-column: span 4;
    }

    ${media.tablet`
        display: grid;
        grid-template-columns: 1fr min-content;

        &:nth-of-type(1) {
            grid-column: 1 / span 12;
        }

        &:nth-of-type(2) {
            grid-column: 1 / span 6;
            grid-row: 2;
        }

        &:nth-of-type(3) {
            grid-column: 7 / span 6;
            grid-row: 2;
        }
    `}

    ${media.desktop`
        &:nth-of-type(1) {
            grid-column: 1 / span 5;
        }

        &:nth-of-type(2) {
            grid-column: 6 / span 4;
            grid-row: 1;
        }

        &:nth-of-type(3) {
            grid-column: 10 / span 3;
            grid-row: 1;
        }
    `}
    
`

const ImageWrapper = styled.div`
    position: relative;

    img {
        border: 6px solid ${props => props.color};
        margin-bottom: 0;
        height: 100%;
        object-fit: cover;

         ${media.desktop`
            height: auto;
        `}
    }

    a {
        position: absolute;
        top: 18px;
        right: 18px;
        border-radius: 100%;
        font-size: 5rem;
        line-height: .9;
        background: #fff;
        color: #000;
        
        transition: all 1.5s cubic-bezier(.075,.82,.165,1);

        svg {
            margin: -2px;
        }

        ${media.desktop`
            opacity: 0;
        `}
    }

    &:hover {
        a {
            opacity: 1;
        }
    }
`

const TextWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    flex-flow: column-reverse;
    margin-left: .5rem;


    h2 {
        margin-bottom: 0;
    }

    p {
        margin-bottom: 5px;
    }

    ${media.tablet`
        flex-flow: row nowrap;
        align-items: center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        white-space: nowrap;
        transform: rotate(180deg);
    `}
`

export const Projects = (props) => {

    return (
        <ProjectsSection>
            <h2>Recent Work</h2>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <GridContainer>
                {props.projects.map(project => (
                    <ProjectWrapper>
                        <ImageWrapper  color={`#000`}>
                            <img src={project.node.frontmatter.featuredImage.childImageSharp.fluid.src} />
                            <Link to={project.node.frontmatter.path}><ChevronCircleRight /></Link>
                        </ImageWrapper>
                        <TextWrapper>
                            <p>{project.node.frontmatter.tags[0]}-</p>
                            <h2>{project.node.frontmatter.title}</h2>
                        </TextWrapper>
                    </ProjectWrapper>
                ))}
            </GridContainer>
            </ScrollAnimation>
        </ProjectsSection>
    )
}