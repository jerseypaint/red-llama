import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { random, divide } from "lodash"
import { css } from "@emotion/core"

import theme from "../../styles/theme"
import media from "../../styles/media"


const HeroWrapper = styled.div`
    width: 100%;
    background-color: ${theme.brand};
    padding: 8rem 0;

    ${media.tablet`
        padding: 14rem 0;
    `}
`

const Content = styled.div`
    margin: 0 auto;
    text-align: center;
`

const Title = styled.h2`
    color: #fff;
    font-size: 2.4rem;
    margin-bottom: 0;
   
    ${media.tablet`
        font-size: 4.6rem;
    `}
`
const Span = styled.span`
    border-bottom: 3px #212121 solid;
    display: inline-block;
    font-size: 1.8rem;

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
        }, random(4,10)*1000)

        const productTimer = setInterval(() => {
            setProduct(what[ProductIndex])
            ProductIndex  = (ProductIndex + 1)%(what.length)
        }, random(4,10)*1000)

        const verticalTimer = setInterval(() => {
            setVertical(whom[verticalIndex])
            verticalIndex  = (verticalIndex + 1)%(whom.length)
        }, random(4,10)*1000)

        return () => {
          clearInterval(verbTimer)
          clearInterval(productTimer)
          clearInterval(verticalTimer)
        }
    }, [])

    return (
    <HeroWrapper current={verb}>
        <Content>
            <Title> We <Span css={verbWidth}>{verb}</Span></Title>
            <Title><Span css={productWidth}>{product}</Span> for </Title>
            <Title><Span css={verticalWidth}>{vertical}</Span> companies.</Title>
        </Content>
    </HeroWrapper>
)}

export default Hero