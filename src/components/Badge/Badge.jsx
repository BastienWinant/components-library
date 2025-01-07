import './Badge.css'
import React from "react"

export default function Badge({children}) {
  return (
    <div className="badge badge-rectangle badge-regular">
      <p className="badge-text">{children}</p>
    </div>
  )
}