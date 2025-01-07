import './Banner.css'
import React from "react"
import clsx from 'clsx'

export default function Banner({children, className}) {
  return (
    <article className={clsx("banner", className)}>
      <p className="banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    </article>
  )
}