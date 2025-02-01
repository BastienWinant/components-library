import { Children, cloneElement } from 'react'

export default function Card({children, iconSrc, type}) {
    let colorStyles
    switch(type) {
        case 'success':
            colorStyles = {backgroundColor: '#34D399'}
            break
        case 'warning':
            colorStyles = {backgroundColor: '#FBBF24'}
            break
        case 'danger':
            colorStyles = {backgroundColor: '#F87171'}
            break
        case 'info':
            colorStyles = {backgroundColor: '#3F75FE'}
            break
        default:
            colorStyles = {backgroundColor: '#CCCCCC'}
    }
    
    return (
        <article className='card'>
            <figure className='card-figure' style={colorStyles}>
                <img src={iconSrc} className='card-icon' />
            </figure>
            <div className='card-body'>
                {children}
            </div>
        </article>
    )
}