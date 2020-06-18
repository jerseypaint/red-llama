import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import { Nav, NavLink, NavButton } from "../nav"
import { LogoLink } from "../buttons"



const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 88;
`

const LogoWrapper = styled.div`
    max-width: 300px;
`

const MenuDrawer = styled.div`
    position: fixed;
    top: 0;
    right:6px;
    padding: 2rem;
    background-color: #fff;
    border: solid 6px #000;
    box-shadow: -10px 10px 35px rgba(0,0,0,.15);
    transform: translateX(100%);
    transition: all 1.5s cubic-bezier(.075,.82,.165,1);
    z-index: 99;

    a {
      margin: 2rem;
      color: #000;
      font-size: 2rem;
      font-family: 'Maven Pro','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
      font-weight: bold;
      text-transform: capitalize;
    }
`

const StyledNavButton = styled(NavButton)`
    display: block;
    position: absolute;
    top: 10px;
    left: -70px;

    span {
      display: block;
      position: absolute;
      top: 18px;
      left: 15px;
      right: 15px;
      height: 34px;

      i {
        display: block;
        position: absolute;
        height: 6px;
        width: 40px;
        background: #fff;

        &:nth-of-type(1) {
          top: 0;
        }
        &:nth-of-type(2) {
          top: 14px;
        }
        &:nth-of-type(3) {
          bottom: 0;
        }
      }
    }
`

const NavButtonBackground = styled.div`
    position: absolute;
    height: 70px;
    width: 70px;
    background-color: black;
`

const StyledNav = styled(Nav)`
    display: block;
`

const open = css`
    transform: translateX(6px);
`
const Header = ({currentPage}) => {
  
  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

const [showDrawer, setShowDrawer] = useState(false)

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoLink />
      </LogoWrapper>
      <MenuDrawer css={showDrawer ? open : undefined}>
        <StyledNavButton onClick={() => setShowDrawer(!showDrawer)}>
          <NavButtonBackground />
          <span>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </StyledNavButton>
          <StyledNav>
            {data.site.siteMetadata.menuLinks.map(menuLink => (
              <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
            ))}
          </StyledNav>
      </MenuDrawer>
    </HeaderWrapper>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
