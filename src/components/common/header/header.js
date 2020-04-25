import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { debounce } from "lodash"
import styled from "styled-components"

import DesktopHeader from "./desktopHeader"
import MobileHeader from "./mobileHeader"

const HeaderWrapper = styled.div`
   a, button {
    font-family: "IBM Plex Sans";
  }
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

const [isScrolled, setIsScrolled] = useState(false)
const scrollThreshold = 200
useEffect(() => {
  const handleScroll = debounce(e => {
    if (!isScrolled & (window.scrollY > scrollThreshold)) {
      setIsScrolled(true)
    }

    if (isScrolled & (window.scrollY < scrollThreshold)) {
      setIsScrolled(false)
    }
  }, 20)

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
})

  return (
  <HeaderWrapper isScrolled={isScrolled}>
    <DesktopHeader
      logo={data.image}
      siteTitle={data.site.siteMetadata.title}
      menu={data.site.siteMetadata.menuLinks}
      isScrolled={isScrolled}
      toggleTheme={toggleTheme}
      currentPage={currentPage}
    />
    <MobileHeader 
      logo={data.image} 
      siteTitle={data.site.siteMetadata.title} 
      menu={data.site.siteMetadata.menuLinks} 
      isScrolled={isScrolled}
    />
  </HeaderWrapper>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
