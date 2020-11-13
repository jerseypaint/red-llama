import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import theme from "../../styles/theme"


const Hero = styled.div`
  position: relative;

  h1 {
    color: ${theme.brand};
  }

  h1 {
    margin-top: 150px;
    font-size: 7rem;
  }
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
            <HeroContainer>
              <h1>red llama</h1>
              <p>We create web apps for a variety of uses and industries - from online stores to enterprise applications. Check out our work below or learn more about <Link to={`/services`}>what we do.</Link></p>
            </HeroContainer>
          </div>
      </Hero>
)}

export default HeroHome