/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import "animate.css/animate.min.css"

import { GlobalStyle } from "../../styles/global"
import darkTheme from "../../styles/darkTheme"
import lightTheme from "../../styles/lightTheme"
import Header from "./header/header" 
import Footer from "./footer"

const Layout = props => {
  const data = useStaticQuery(graphql`
  query {
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

  const [theme, setTheme] = useState()

  function toggleTheme() {
    if (theme === `dark`) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
    setTheme(localStorage.getItem(`theme`))
  }

  useEffect(() => {
    if (typeof window !== `undefined` && localStorage.getItem(`theme`) === null ) {
      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem('theme', 'dark')
      }
      else {
        localStorage.setItem('theme', 'light')
      }
      setTheme(localStorage.getItem(`theme`))
    }
    else if (typeof window !== `undefined` && localStorage.getItem(`theme`) !== null) {
      setTheme(localStorage.getItem(`theme`))
    }
  })
 

  return (
    <ThemeProvider theme={theme === `dark` ? darkTheme : lightTheme}>
      <GlobalStyle />
      <>
        <Header siteTitle={data.site.siteMetadata.title} theme={theme} toggleTheme={toggleTheme} currentPage={props.currentPage} />
          <main>{props.children}</main>
        <Footer
          logo={data.image} 
          siteTitle={data.site.siteMetadata.title} 
          menu={data.site.siteMetadata.menuLinks} 
        />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
