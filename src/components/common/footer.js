import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "./nav"
import media from "../../styles/media"
import theme from "../../styles/theme"
import Section from "./section"
import { gridContainer, GridContainer } from "./gridContainer"

const FlexContainer = styled.div`
    ${media.tablet`
        display: flex;
        justify-content: space-between;
    `}
`

const LogoWrapper = styled.div`

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
const styleFooter = css`
    background-color: ${theme.lightGrey};
`

const Footer = props => (
    <footer css={styleFooter}>
        <Section>
            <FlexContainer>
                <LogoWrapper>
                    <LogoLink to={`/`}><Img fluid={props.logo.childImageSharp.fluid} alt="red llama logo" /><span>{props.siteTitle}</span></LogoLink>
                </LogoWrapper>
                <Nav>
                    {props.menu.map(menuLink => (
                        <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
                    ))}
                </Nav>
            </FlexContainer>
        </Section>
    </footer>
)

export default Footer