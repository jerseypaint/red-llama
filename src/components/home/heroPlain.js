import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ScrollAnimation from 'react-animate-on-scroll'
import theme from "../../styles/theme"
import media from "../../styles/media"

const Hero = styled.div`
  position: relative;
  padding: 0 1rem;

  h1 {
    color: ${theme.brand};
    font-size: 4rem;
  }
  ${media.tablet`
    h1 {
      font-size: 7rem;
    }
  `}

`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    font-size: 2rem;
    max-width: 800px;
  }
`

const HeroHome = () => {
    return(
        <Hero>
          <div>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.6}>
            <HeroContainer>
              <h1>red llama</h1>
              <p>We create web apps for a variety of uses and industries - from online stores to enterprise applications. Check out our work below or learn more about <Link to={`/services`}>what we do.</Link></p>
            </HeroContainer>
            </ScrollAnimation>
          </div>
      </Hero>
)}

export default HeroHome