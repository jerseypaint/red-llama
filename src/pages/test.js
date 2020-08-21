import React, { useState, useEffect, useRef } from "react"
import { CSSTransition } from 'react-transition-group'
import styled from "styled-components"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"


const Hero = styled.div`
  position: relative;

  .my-node-appear {
    display: block;
    height: 100vh;
    width: 100%;
    font-size: 40px;
    overflow: hidden;
    position: absolute;
    text-align: left;
    top: 0;
    right: 0;
    background: red;
    color: white;
    z-index: 3;
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
    color: black;
    background: white;
    z-index: 1;
    display: block;
    height: 400px;
    width: 100%;
    font-size: 40px;
    overflow: hidden;
    text-align: left;
    top: 0;
    right: 0;
  }

  h1 {
    margin-top: 150px;
    font-size: 7rem;
  }
`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Test = styled.div`
  height: 800px;
  width: 100%;
  background: blue;
`

const IndexPage = ({data, theme}) => {
const [isLoaded, setLoaded] = useState(false)

function llamaLoad() {
  setLoaded(true)
}

 return (
  <Layout currentPage={`index`}>
  <SEO title="Home" />
    <Hero isLoaded={isLoaded}>
      <div className="under">
        <HeroContainer>
        <h1>red llama</h1>
        </HeroContainer>
      </div>
      <CSSTransition in={true} appear={true} timeout={3000} classNames="my-node" onEntered={llamaLoad}>
          <div>
          <HeroContainer>
          <CSSTransition in={true} appear={true} timeout={800} classNames="header">
            <h1>red llama</h1>
          </CSSTransition>
          </HeroContainer>
          </div>
        </CSSTransition>
    </Hero>
    <Test>

    </Test>

    </Layout>
)
}

export default IndexPage