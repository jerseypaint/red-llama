import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faEclipseAlt, faBars, faEllipsisV, faCheckCircle } from "@fortawesome/pro-duotone-svg-icons"
import { faChevronCircleRight } from "@fortawesome/pro-regular-svg-icons"

export const ChevronCircleRight = () => (
    <FontAwesomeIcon icon={faChevronCircleRight} />
)

export const Bars = () => (
    <FontAwesomeIcon icon={faBars} />
)

export const Eclipse = () => (
    <FontAwesomeIcon icon={faEclipseAlt} />
)

export const CheckCircleListItem = () => (
    <FontAwesomeIcon icon={faCheckCircle} listItem />
)