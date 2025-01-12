import React from "react"
import clsx from 'clsx'
import warningIcon from './img/warning-sign.svg'
import checkIcon from './img/c-check-2.svg'
import infoIcon from './img/c-info.svg'
import dangerIcon from "./img/c-remove.svg"

export default function Banner({children, type}) {
  let iconImg = warningIcon

  if (type === "success") iconImg = checkIcon
  else if (type === "danger") iconImg = dangerIcon
  else if (type === "info") iconImg = infoIcon

  let className = `${type}-light`

  return (
    <article className={clsx("banner", className)}>
      <img className="banner-icon" src={iconImg} />
      <div>{children}</div>
    </article>
  )
}