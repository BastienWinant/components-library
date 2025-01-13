import './Badge.css'

export default function Badge({children}) {
  return (
    <div className="badge">
      <p className="badge-text">{children}</p>
    </div>
  )
}