import './Banner.css'
import React from "react"
import clsx from 'clsx'

export default function Banner({children, className}) {
  return (
    <div className={clsx("banner", className)}>
      {children}
    </div>
  )
}