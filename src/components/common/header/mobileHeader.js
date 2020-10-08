import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"

import { NavLink, NavButton } from "../nav"
import media from "../../../styles/media"
import theme from "../../../styles/theme"

const MobileHeaderWrapper = styled.div`
    position: fixed;
    top:0;
    width: 100%;
    max-height: 80px;
    padding: 0.5rem;
    z-index: 99;

    ${media.tablet`
        display: none;
    `}
`
const MobileNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
`

const LogoLink = styled(NavLink)`
    align-items: center;

    .gatsby-image-wrapper {
        min-width: calc(80px - 1rem);
    }
`

const NavDrawer = styled.div`
    position: absolute;
    top: 80px;
    left:0;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #333;

    a {
        padding: 1rem;
    }
`

const scrolledStyle = css`
    background-color: ${theme.darkGrey};
`

const MobileHeader = ({isScrolled, menu, logo, siteTitle}) => {

    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <MobileHeaderWrapper  isScrolled={isScrolled} css={ isScrolled ? scrolledStyle : undefined} >
            <MobileNav>
                <LogoLink to={`/`}><Img fluid={logo.childImageSharp.fluid} alt="red llama logo" /><span>{siteTitle}</span></LogoLink>
                <NavButton onClick={() => setShowDrawer(!showDrawer)}>P</NavButton>
            </MobileNav>

            {showDrawer && (<NavDrawer>
                {menu.map(menuLink => (
                        <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
                    ))}
            </NavDrawer>)}
        </MobileHeaderWrapper>
    )
}


export default MobileHeader