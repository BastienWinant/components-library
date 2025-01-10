import './Banner.css'
import React from "react"
import clsx from 'clsx'
import warningIcon from './img/warning-sign.svg'
import checkIcon from './img/c-check-2.svg'
import infoIcon from './img/c-info.svg'
import dangerIcon from "./img/c-remove.svg"

export default function Banner({children, className}) {
  let iconImg = warningIcon

  if (className.includes("success")) iconImg = checkIcon
  else if (className.includes("danger")) iconImg = dangerIcon
  else if (className.includes("info")) iconImg = infoIcon

  return (
    <article className={clsx("banner", className)}>
      <img className="banner-icon" src={iconImg} />
      <div>{children}</div>
    </article>
  )
}