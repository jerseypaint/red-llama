import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"
import { Nav, NavLink, NavButton } from "./nav"
import { Eclipse } from "./icons"
import media from "../../styles/media"
import Section from "./section"
import { GridContainer } from "./gridContainer"
import { LogoLink } from "../common/buttons"

const LogoWrapper = styled.div`
    grid-column: 1 / span 4;
`

const styleNav = css`
    display: block;
    grid-column: 1 / span 4;

    ${media.tablet`
        display: flex;
        grid-column: 6;
    `}
`

const styleFooter = css`
    background-color: #000;
`

const FooterSection = styled(Section)`
    padding: 2em 0;
`

const Footer = props => (
    <footer css={styleFooter}>
        <FooterSection>
            <GridContainer>
                <LogoWrapper>
                    <LogoLink />
                </LogoWrapper>
                <Nav css={styleNav}>
                    {props.menu.map(menuLink => (
                        <NavLink to={menuLink.link} >{menuLink.name}</NavLink>
                    ))}
                </Nav>
            </GridContainer>
        </FooterSection>
    </footer>
)

export default Footer