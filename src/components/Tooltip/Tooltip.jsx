import { useState, useRef } from "react"
import { createPortal } from "react-dom"
import TooltipBox from "./TooltipBox"

export default function Tooltip({children, ...props}) {
  const [showBox, setShowBox] = useState(false)
  const inputRef = useRef(null)
  
  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowBox(true)}
      onMouseLeave={() => setShowBox(false)}
      ref={inputRef}
    >
      {children}
      {showBox && createPortal(
        <TooltipBox {...props} />,
        inputRef.current
      )}
    </div>
  )
}