import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { debounce } from "lodash"
import styled, { css, keyframes } from "styled-components"
import { Nav, NavLink, NavButton } from "../nav"
import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 88;

   a, button {
    font-family: "IBM Plex Sans";
  }
`

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  25% { transform: translate(1px, -1px) rotate(3deg); }
  50% { transform: translate(-1px, 1px) rotate(-3deg); }
  75% { transform: translate(1px, -1px) rotate(3deg); }
  100% { transform: translate(-1px, 1px) rotate(-3deg); }
`

const LogoWrapper = styled.div`
    max-width: 300px;
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
        color: ${props => props.theme.accentColor};

        img {
          animation: ${shake} 0.5s linear infinite;
        }
    }

    &:after {
        display: none;
    }
`

const MenuDrawer = styled.div`
    position: fixed;
    top: 0;
    right:2px;
    background: ${props => props.theme.accentColor};
    box-shadow: -10px 10px 35px rgba(0,0,0,.15);
    transform: translateX(100%);
    transition: all 1.5s cubic-bezier(.075,.82,.165,1);
    z-index: 99;

    a {
      padding: 1rem;
      font-size: 2rem;
      font-family: 'Maven Pro','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
      font-weight: bold;
      text-transform: lowercase;
    }
`

const StyledNavButton = styled(NavButton)`
    display: block;
    position: absolute;
    top: 10px;
    left: -60px;

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
    background-color: ${props => props.theme.accentColor};
`

const StyledNav = styled(Nav)`
    display: block;
`

const open = css`
    transform: translateX(0);
`
const Header = ({toggleTheme, currentPage}) => {
  
  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
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

const [showDrawer, setShowDrawer] = useState(false)

  return (
    <HeaderWrapper>
      <LogoWrapper>
          <LogoLink to={`/`}><Img fluid={data.image.childImageSharp.fluid} alt="red llama logo" /><span>{data.site.siteMetadata.title}</span></LogoLink>
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
