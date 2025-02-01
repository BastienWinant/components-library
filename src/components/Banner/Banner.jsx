import checkIcon from './img/c-check.svg'
import infoIcon from './img/c-info.svg'
import removeIcon from './img/c-remove.svg'
import radioIcon from './img/radio-btn.svg'
import warningIcon from './img/warning-sign.svg'

export default function Banner({children, type}) {
    let imgSrc
    let colorStyles
    switch(type) {
        case 'success':
            imgSrc = checkIcon
            colorStyles = {backgroundColor: '#ECFDF5', color: '#065F46'}
            break
        case 'warning':
            imgSrc = warningIcon
            colorStyles = {backgroundColor: '#FFFBEB', color: '#B45309'}
            break
        case 'danger':
            imgSrc = removeIcon
            colorStyles = {backgroundColor: '#FEF2F2', color: '#B45309'}
            break
        case 'info':
            imgSrc = infoIcon
            colorStyles = {backgroundColor: '#EFF6FF', color: '#1E40AF'}
            break
        default:
            imgSrc = radioIcon
            colorStyles = {backgroundColor: '#F3F4F6', color: '#1F2937'}
    }
    
    return (
        <article className='banner' style={colorStyles}>
            <img src={imgSrc} className="banner-img" alt="" />
            <div className='banner-body'>
                {children}
            </div>
        </article>
    )
}