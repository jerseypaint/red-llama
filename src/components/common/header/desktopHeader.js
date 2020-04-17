import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "../nav"
import media from "../../../styles/media"
import theme from "../../../styles/theme"

const DesktopHeaderWrapper = styled.div`
    width: 100%;
    padding: 0.6rem;
    display: none;

    ${media.tablet`
        position: fixed;
        display: flex;
        justify-content: space-between;
        z-index: 99;
        transition: all 600ms ease-in-out;
        
        a, button {
            color: #fff;
            font-size: 1.2rem;
        }
    `}    
`

const LogoWrapper = styled.div`
    max-width: 300px;
`

const SubNavWrapper = styled.div`
    display: flex;
    align-items: center;
`

const LogoLink = styled(NavLink)`
    align-items: center;
    padding: 0;
    text-transform: lowercase;
    
    .gatsby-image-wrapper {
        min-width: 80px;
    }
`

const scrolledStyle = css`
    background-color: ${theme.darkGrey};
`

const DesktopHeader = props => (
    <DesktopHeaderWrapper isScrolled={props.isScrolled} css={ props.isScrolled ? scrolledStyle : undefined} >
        <LogoWrapper>
            <LogoLink to={`/`}><Img fluid={props.logo.childImageSharp.fluid} alt="red llama logo" /><span>{props.siteTitle}</span></LogoLink>
        </LogoWrapper>
        <Nav>
            {props.menu.map(menuLink => (
                <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
            ))}
        </Nav>
        <SubNavWrapper>
            <NavButton>Toggle</NavButton>
            <NavLink>Login</NavLink>
        </SubNavWrapper>
    </DesktopHeaderWrapper>
)

export default DesktopHeader