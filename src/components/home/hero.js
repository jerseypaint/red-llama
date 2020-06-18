import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import { random, divide } from "lodash"
import { css } from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import theme from "../../styles/theme"
import media from "../../styles/media"


const HeroWrapper = styled.div`
    width: 100%;
    padding: 8rem 0;
    background-color: #FF9B42;

    ${media.tablet`
        padding: 14rem 0;
    `}

    .fade-enter{
        opacity: 0;
     }
     .fade-exit{
        opacity: 1;
     }
     .fade-enter-active{
        opacity: 1;
     }
     .fade-exit-active{
        opacity: 0;
     }
     .fade-enter-active,
     .fade-exit-active{
        transition: opacity 500ms;
     }
`

const Content = styled.div`
    margin: 0 auto;
    text-align: center;
`

const Title = styled.h2`
    font-size: 2.4rem;
    margin-bottom: 0;
   
    ${media.tablet`
        font-size: 4.6rem;
    `}
`

const Span = styled.span`
    border-bottom: 6px #212121 solid;
    display: inline-block;
    font-size: 2.4rem;

    ${media.tablet`
        font-size: 4.6rem;
    `}
`
const Hero = props => {
    const doing = props.doing
    const what = props.what
    const whom = props.whom

    const longestVerb = Math.max(...(doing.map(el => el.length)))
    const longestProduct = Math.max(...(what.map(el => el.length)))
    const longestVertical = Math.max(...(whom.map(el => el.length)))

    const [verb, setVerb] = useState(doing[0])
    const [product, setProduct] = useState(what[0])
    const [vertical, setVertical] = useState(whom[0])

    const verbWidth = css`
        min-width: ${divide(longestVerb, 1.8)}em;
    `
    const productWidth = css`
        min-width: ${divide(longestProduct, 1.8)}em;
    `
    const verticalWidth = css`
        min-width: ${divide(longestVertical, 1.8)}em;
    `

    useEffect(() => {
        let VerbIndex = 1
        let ProductIndex = 1
        let verticalIndex = 1

        const verbTimer = setInterval(() => {
            setVerb(doing[VerbIndex])
            VerbIndex  = (VerbIndex + 1)%(doing.length)
        }, 3300)

        const productTimer = setInterval(() => {
            setProduct(what[ProductIndex])
            ProductIndex  = (ProductIndex + 1)%(what.length)
        }, 4300)

        const verticalTimer = setInterval(() => {
            setVertical(whom[verticalIndex])
            verticalIndex  = (verticalIndex + 1)%(whom.length)
        }, 5300)

        return () => {
          clearInterval(verbTimer)
          clearInterval(productTimer)
          clearInterval(verticalTimer)
        }
    }, [])

    return (
    <HeroWrapper current={verb}>

            <Content>
                <Title> We <CSSTransition
                key={verb}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames='fade'
                >
                    <Span css={verbWidth}>{verb}</Span></CSSTransition></Title>
                <Title>web applications for</Title>
                <Title><Span css={verticalWidth}>{vertical}</Span> companies.</Title>
            </Content>
    </HeroWrapper>
)}

export default Hero