import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import theme from "../../styles/theme"
import Img from "gatsby-image"
import { ChevronCircleRight } from "./icons"

const LinkWrapper = styled(Link)`
    position: relative;
    display: inline-block;
    padding-left: 2px;
    color:${props => props.theme.textColor};
    font-size: 1.6rem;
    text-decoration: none;
    --fa-secondary-color: transparent;
    transition: all 1.5s cubic-bezier(.075,.82,.165,1);
    transform: translateZ(0);
    backface-visibility: hidden;

    &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 600ms;
    }

    &:hover {
        transform: scale(1.05);
        &:after {
            transform-origin: left;
            transform: scaleX(1);
        }
    }

`

const Button = styled.button`
    position: relative;
    display: inline-block;
    padding-left: 2px;
    color:${props => props.theme.textColor};
    font-size: 1.6rem;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    --fa-secondary-color: transparent;
    transition: all 1.5s cubic-bezier(.075,.82,.165,1);
    transform: translateZ(0);
    backface-visibility: hidden;

    &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 600ms;
    }

    &:hover {
        transform: scale(1.05);
        &:after {
            transform-origin: left;
            transform: scaleX(1);
        }
    }
`

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(-10deg); }
  25% { transform: translate(1px, -1px) rotate(10deg); }
  50% { transform: translate(-1px, 1px) rotate(-10deg); }
  75% { transform: translate(1px, -1px) rotate(10deg); }
  100% { transform: translate(-1px, 1px) rotate(-10deg); }
`

const LogoLinkWrapper = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    color: ${props => props.theme.accentColor};
    font-family: "IBM Plex Sans";
    font-size: 1.6rem;
    text-transform: lowercase;
    text-decoration: none;
    transform: translateZ(0);
    backface-visibility: hidden;

    .gatsby-image-wrapper {
        min-width: 80px;
    }

    &:hover {
        transform: scale(1);

        img {
            animation: ${shake} .8s linear infinite;
        }
    }
`

export const StyledLink = props => {
    return (<LinkWrapper to={props.to} css={props.css}>
        {props.children} <ChevronCircleRight />
    </LinkWrapper>)
}

export const StyledButton = props => {
    return (
    <Button type={props.type} css={props.css}>
        {props.children} <ChevronCircleRight />
    </Button>)
}

export const LogoLink = ()=> {
    const data = useStaticQuery(graphql`
        query logoQuery {
            site {
                siteMetadata {
                    title
                }
            }
            image: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid (maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <LogoLinkWrapper to={`/`} ><Img fluid={data.image.childImageSharp.fluid} alt="red llama logo" /><span>{data.site.siteMetadata.title}</span></LogoLinkWrapper>
    )
}