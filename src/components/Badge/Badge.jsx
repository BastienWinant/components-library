import './Badge.css'
import clsx from 'clsx'

export default function Badge({children, color, shape}) {
  let className = clsx('badge', `${color}-light`, shape)

  return (
    <div className={className}>
      <p className="badge-text">{children}</p>
    </div>
  )
}