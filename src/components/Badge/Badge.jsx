import React from "react"

export default function Badge({children}) {
  return (
    <div className="badge badge-square">
      <p className="badge-text">{children}</p>
    </div>
  )
}