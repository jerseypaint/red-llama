import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

import { StyledLink } from "../common/styledLink"
import media from "../../styles/media"
import Section from "../common/section"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ProjectsList } from "../projects/projectsList"

const ProjectsSection = styled(Section)`
    padding-top: 0;
    position: relative;
`
export const Projects = (props) => {

    return (
        <ProjectsSection>
            <h2>Recent Work</h2>
            <ProjectsList theme={props.theme} projects={props.projects} />
        </ProjectsSection>
    )
}