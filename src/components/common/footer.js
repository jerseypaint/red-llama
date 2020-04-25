import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "./nav"
import media from "../../styles/media"
import Section from "./section"
import { gridContainer, GridContainer } from "./gridContainer"

const LogoWrapper = styled.div`
    grid-column: 1 / span 4;

    ${media.tablet`
        grid-column: 1;
    `}
`

const LogoLink = styled(NavLink)`
    flex-direction: column;
    align-items: center;
    padding: 0;
    text-transform: lowercase;
    height: 100px;
    
    .gatsby-image-wrapper {
        min-width: 80px;
    }
`

const styleNav = css`
    display: block;
    grid-column: 1 / span 4;

    ${media.tablet`
        grid-column: 2;
    `}
`

const styleFooter = css`
    background-color: #000;
`

const Footer = props => (
    <footer css={styleFooter}>
        <Section>
            <GridContainer>
                <LogoWrapper>
                    <LogoLink to={`/`}><Img fluid={props.logo.childImageSharp.fluid} alt="red llama logo" /><span>{props.siteTitle}</span></LogoLink>
                </LogoWrapper>
                <Nav css={styleNav}>
                    {props.menu.map(menuLink => (
                        <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
                    ))}
                </Nav>
            </GridContainer>
        </Section>
    </footer>
)

export default Footer