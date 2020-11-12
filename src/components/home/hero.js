import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { random, divide } from "lodash"
import { css } from "styled-components"
import { CSSTransition } from 'react-transition-group'
import { Link } from "gatsby"
import theme from "../../styles/theme"
import media from "../../styles/media"


const Hero = styled.div`
  position: relative;

  .my-node-appear {
    display: block;
    height: 100vh;
    width: 100%;
    font-size: 40px;
    overflow: hidden;
    position: fixed;
    text-align: left;
    top: 0;
    right: 0;
    background: ${theme.brand};
    color: white;
    z-index: 99;
  }

  .my-node-appear-active, .my-node-appear-done {
    height: 0;
    transition: height 1s cubic-bezier(.215,.61,.355,1);
    transition-delay: 1200ms;
  }

  .my-node-appear-done {
    h1 {
      display: none;
    }
  }

  .header-appear {
    opacity: 0;
    transform-origin: center top;
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(-80deg);
    transition: opacity 0s cubic-bezier(.215,.61,.355,1),transform 0s cubic-bezier(.215,.61,.355,1);
  }

  .header-appear-active, .header-appear-done {
    transform: none;
    opacity: 1;
    transition-duration: .8s;
  }

  .under {
    z-index: 1;
    display: block;
    width: 100%;
    font-size: 40px;
    overflow: hidden;
    text-align: left;
    top: 0;
    right: 0;

    h1 {
      color: ${theme.brand};
    }
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

const Test = styled.div`
  height: 800px;
  width: 100%;
  background: blue;
`

const HeroHome = ({welcomed, setWelcomed}) => {
  const [backgroundIn, setBackgroundIn] = useState(true)
  const [textIn, setTextIn] = useState(true)
  
    return(
        <Hero>
          <div className="under">
            <HeroContainer>
              <h1>red llama</h1>
              <p>We create web apps for a variety of uses and industries - from online stores to enterprise applications. Check out our work below or learn more about <Link to={`/services`}>what we do.</Link></p>
            </HeroContainer>
          </div>
          <CSSTransition in={backgroundIn} appear={true} timeout={3000} classNames="my-node">
              <div>
                <HeroContainer>
                  <CSSTransition in={textIn} appear={true} timeout={800} classNames="header" onEntered={setWelcomed} >
                    <h1>red llama</h1>
                  </CSSTransition>
                </HeroContainer>
              </div>
          </CSSTransition>
      </Hero>
)}

export default HeroHome