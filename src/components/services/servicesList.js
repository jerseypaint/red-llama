import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import theme from "../../styles/theme"
import Section from "../common/section"
import { GridContainer } from "../common/gridContainer"
import media from "../../styles/media"

const TitleWrapper = styled.div`
    position: relative;
    grid-column: span 4;

    ${media.tablet`
        grid-column: 1 / span 4;
    `}

    @keyframes example {
        0%   {background-color: red;}
        100% {background-color: green;}
    }
`

const Content = styled.div`
    grid-column: span 4;
    
    ${media.tablet`
        grid-column: 7 / span 4 ;
    `}
`

const StickyDesktop = styled.div`
    display: none;

    ${media.tablet`
        display: block;
        position: sticky;
        background-color: ${theme.brand};
        height: 100vh;
        top: 0;

        h2 {
            position: absolute;
            top: 0;
            padding: 8rem 0 0 4rem;
            font-size: 4rem;
            word-break: none;
        }
    `}

`

const StickyMobile = styled.div`
    display: block;
    position: sticky;
    background-color: ${theme.brand};
    top: 80px;
    margin: 0 -1rem;
    padding: 1rem;
    z-index: 88;
    
    h2 {
        text-align: center;
        margin-bottom: 0;
    }
    
    ${media.tablet`
        display: none;
    `}
`

const DescriptionWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

const QW = styled.div`

`


const ServiceItem = ({description, updateTitle, title}) => {
    const [inView, setInView] = useState(false)
    const ref = useRef()

    useEffect(() => {
      let prevRatio = 0.0
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio > prevRatio){
            setInView(true)
            updateTitle(title)
        } else {
            setInView(false)
        }
        prevRatio = entry.intersectionRatio
    },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.6
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
    }, [ref]);

    return (
        <DescriptionWrapper  ref={ref} inView={inView} title={title}>
            <p>{description}</p>
        </DescriptionWrapper>
    )
}


export const ServicesList = ({services}) => {
    const [currentTitle, setCurrentTitle] = useState(`hello`)
    function updateTitle(value) {
        setCurrentTitle(value)
    }
    return (
        <Section>
            <QW currentTitle={currentTitle}>
                <StickyMobile>
                    <h2>{currentTitle}</h2 >
                </StickyMobile>
                <GridContainer>
                    <TitleWrapper>
                        <StickyDesktop>
                            <h2>{currentTitle}</h2 >
                        </StickyDesktop>
                    </TitleWrapper>
                    <Content>
                        {services.map(service => (        
                            <ServiceItem title={service.title} description={service.description} updateTitle={updateTitle} />
                        ))}
                    </Content>
                </GridContainer>
            </QW>
        </Section>
    )
}
