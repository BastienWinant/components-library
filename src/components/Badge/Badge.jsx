import './index.css'
import clsx from 'clsx'

export default function Badge({children, shape, color}) {
    const badgeClasses = clsx('badge', shape || 'square', color || 'gray')
    return (
        <div className={badgeClasses}>
            <p className='badge-text'>{children}</p>
        </div>
    )
}