import './Badge.css'
import React from "react"
import clsx from 'clsx'

export default function Badge({children, className}) {
  return (
    <div className={clsx("badge", className)}>
      <p className="badge-text">{children}</p>
    </div>
  )
}