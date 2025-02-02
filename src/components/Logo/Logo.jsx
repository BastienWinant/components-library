import './index.css'
import logoIcon from './img/house-5.svg'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logoIcon} className='logo-img' alt='Logo image.' />
            <p className='logo-text'>Work<span>cation</span></p>
        </div>
    )
}