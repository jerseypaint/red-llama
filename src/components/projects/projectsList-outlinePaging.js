import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"

import theme from "../../styles/theme"
import media from "../../styles/media"
import Section from "../common/section"
import { StyledLink } from "../common/styledLink"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectsWrapper = styled.div`
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
                grid-column: 5 / span 8;
                grid-row: 1;
                align-self: center;
                position: sticky;
                top: 0;
          `}

          img {
            height: 400px;
            width: 100%;
            object-fit: cover;
          }
        }

        .slick-dots {
            position: relative;
            text-align: left;
            font-family: 'Maven Pro','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
            font-weight: bold;
            font-size: 4em;
            grid-column: 1 / span 4;
            grid-row: 1;

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

const TextWrapper = styled.div`
    padding: 2rem;
    margin-bottom: 1rem;
    background-color: ${props => props.color};
    box-shadow: -10px 10px 35px rgba(0,0,0,.15);
    transition: all 1.5s cubic-bezier(.075,.82,.165,1);

    p {font-size: 1rem;}

    ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0;

        li {
            width: 50%;
        }
    }
`

const MetaWrapper = styled.div`
    position: relative;
    margin: -20% auto 0 1rem;
    width: 80%;
`



const LinkWrapper = styled.div`
    display: block;
    text-align: right;
`
export const ProjectsList = (props) => {
    const [color, setColor] = useState(`transparent`)

    const settings = {
        customPaging: function(i) {
            return (
                <a>
                    {props.projects[i].node.frontmatter.title}
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
        <ProjectsWrapper >
            <Slider {...settings}>
                {props.projects.map(project => (
                    <div color={project.node.frontmatter.color}>
                        <img src={project.node.frontmatter.featuredImage.childImageSharp.fluid.src} />
                        <MetaWrapper>
                            <TextWrapper color={project.node.frontmatter.color}>
                                <p>{project.node.frontmatter.description}</p>
                                <ul>
                                    {project.node.frontmatter.tags.map(tag => (
                                        <li>{tag}</li>
                                    ))}
                                </ul>
                            </TextWrapper>
                            <LinkWrapper>
                                <StyledLink to={project.node.frontmatter.path}>Read More</StyledLink>
                            </LinkWrapper>
                        </MetaWrapper>
                    </div>
                ))}
            </Slider>
        </ProjectsWrapper>
    )
}

