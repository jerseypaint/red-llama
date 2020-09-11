import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../styles/theme"
import media from "../../styles/media"


const About = styled.div`
  padding: 3.5rem 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto
  display: flex;
`

const AboutHome = props => {
    return(
      <About>
        <Container>
          <Services></Services>
          <Contact>
            <p>We are a small development agency making big things for brands that need things done right.</p>
            <p></p>
          </Contact>
        </Container>
      </About>
)}

export default AboutHome