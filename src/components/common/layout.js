/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from 'emotion-theming'
import "animate.css/animate.min.css"

import theme from "../../styles/theme"
import Header from "./header/header" 
import Footer from "./footer"

const Layout = ({ children }) => {
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

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            background-color: ${theme.darkGrey};
            color: ${theme.white};
          } 

          p {
            font-size: 1.2rem;
            line-height: 1.4;
            letter-spacing: 0.8px;
          }
        `}
      />
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
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
