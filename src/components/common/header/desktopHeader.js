import React from "react"
import styled, { css } from "styled-components"

import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "../nav"
import { Eclipse } from "../icons"
import media from "../../../styles/media"

const DesktopHeaderWrapper = styled.div`
    display: none;

    ${media.tablet`
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0.6rem;
        z-index: 99;
        transition: all 600ms ease-in-out;

        a, button {
        font-size: 1.2rem;
        color: ${props => props.currentPage === `index` && !props.isScrolled ? `#fff` : props.theme.textColor};

        &:hover::after {
            background-color: ${props => props.currentPage === `index` && !props.isScrolled ? `#fff` : props.theme.accentColor};
        }
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
    transition: all 600ms ease-in-out;

    .gatsby-image-wrapper {
        min-width: 80px;
    }

    &:hover {
        color: ${props => props.theme.accentColor}
    }

    &:after {
        display: none;
    }
`

const scrolledStyle = css`
    background-color: ${props => props.theme.bgColor};

    ${LogoLink} {
        color: ${props => props.theme.accentColor};

        &:hover {
            color: ${props => props.theme.textColor};
        }
    } 
`

const Toggle = styled(NavButton)`
    
    --fa-primary-color: ${props => props.theme.textColor === `#FFFFFF` ? `inherit` : props.theme.accentColor} ;
    --fa-secondary-color: ${props => props.theme.textColor === `#FFFFFF` ? props.theme.accentColor : `inherit` };
    transition: all 600ms ease-in-out;
    
    button& {
     font-size: 1.6rem;
    }

    &:hover {
        --fa-secondary-opacity: 1;
        &::after {
            display: none;
        }
    }
`


const DesktopHeader = ({toggleTheme, isScrolled, logo, siteTitle, menu, currentPage }) => (
    <DesktopHeaderWrapper currentPage={currentPage} isScrolled={isScrolled} css={ isScrolled ? scrolledStyle : undefined} >
        <LogoWrapper>
            <LogoLink to={`/`}><Img fluid={logo.childImageSharp.fluid} alt="red llama logo" /><span>{siteTitle}</span></LogoLink>
        </LogoWrapper>
        <Nav>
            {menu.map(menuLink => (
                <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
            ))}
        </Nav>
        <SubNavWrapper>
            <Toggle onClick={toggleTheme}>
                <Eclipse />
            </Toggle>
            <NavLink>Login</NavLink>
        </SubNavWrapper>
    </DesktopHeaderWrapper>
)

export default DesktopHeader