import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "./nav"
import media from "../../styles/media"
import theme from "../../styles/theme"
import Section from "./section"
import { gridContainer, GridContainer } from "./gridContainer"

const FlexContainer = styled.div`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column-reverse;
    ${Nav} {
        a {
            margin: 0 1rem 0 0;
        }
    }

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `}
`

const LogoWrapper = styled.div`
    margin: 2rem 0 0rem 1rem;
`

const LogoLink = styled(NavLink)`
    display: block;
    max-width: 100px;
    color: ${theme.brand};
    text-align: center;
    font-weight: bold;
    font-family: "IBM Plex Sans";
    text-transform: lowercase;
    border-bottom: none;

    ${media.tablet`
        flex-direction: column;
        align-items: center;
        padding: 0;
        text-transform: lowercase;
        background-image: none;
        
        .gatsby-image-wrapper {
            min-width: 80px;
        }

        &:hover {
            background-image: none;
        }
    `}
`
const styleFooter = css`
    background-color: ${theme.lightGrey};
`

const Footer = props => (
    <footer css={styleFooter}>
            <FlexContainer>
                <LogoWrapper>
                    <LogoLink to={`/`}><Img fluid={props.logo} alt="red llama logo" /><span>{props.siteTitle}</span></LogoLink>
                </LogoWrapper>
                <Nav>
                    {props.menu.map(menuLink => (
                        <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
                    ))}
                </Nav>
            </FlexContainer>
    </footer>
)

export default Footer