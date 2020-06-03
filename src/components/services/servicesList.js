import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
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
        height: 100vh;
        top: 0;

        h2 {
            position:relative;
            padding: 8rem 0 0 4rem;
            font-size: 4rem;
            word-break: none;
        }
    `}

`

const StickyMobile = styled.div`
    display: block;
    position: sticky;
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

const StyledSection = styled(Section)`
    padding-bottom: 0;
`

const Underline = styled.span`
    display: block;
    height: 2px;
    width: 100%;
    background-color: #fff;
`

const Subservices = styled.ul`
`

const ServiceItem = ({description, updateTitle, title, subservices, updateSubs}) => {
    const [inView, setInView] = useState(false)
    const ref = useRef()

    useEffect(() => {
      let prevRatio = 0.0
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio > prevRatio){
            setInView(true)
            updateTitle(title)
            updateSubs(subservices)
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
    const [currentSubs, setCurrentSubs] = useState([])

    function updateTitle(value) {
        setCurrentTitle(value)
    }

    function updateSubs(arr){
        setCurrentSubs(arr)
    }
    
    return (
        <StyledSection>
            <QW currentTitle={currentTitle}>
                <StickyMobile>
                    <h2>{currentTitle}</h2 >
                    <Underline></Underline>
                </StickyMobile>
                <GridContainer>
                    <TitleWrapper>
                        <StickyDesktop>
                            <h2>{currentTitle}</h2 >
                            <Underline></Underline>
                            <Subservices>
                                {currentSubs && currentSubs.map(sub => (     
                                    <li>{sub}</li>
                                ))}
                            </Subservices>
                        </StickyDesktop>
                    </TitleWrapper>
                    <Content>
                        {services.map(service => (        
                            <ServiceItem 
                            title={service.title} 
                            description={service.description}
                            subservices={service.subservices} 
                            updateTitle={updateTitle} 
                            updateSubs={updateSubs}
                            />
                        ))}
                    </Content>
                </GridContainer>
            </QW>
        </StyledSection>
    )
}
