import clsx from 'clsx'
import checkmarkIcon from './img/c-check.svg'
import warningIcon from './img/warning-sign.svg'
import dangerIcon from './img/c-remove.svg'
import infoIcon from './img/c-info.svg'
import defaultIcon from './img/radio-btn.svg'

export default function Banner({children, status}) {
  let bannerIcon
  let colorClass
  switch(status) {
    case 'success':
      bannerIcon = checkmarkIcon
      colorClass = 'green-light'
      break
    case 'warning':
      bannerIcon = warningIcon
      colorClass = 'yellow-light'
      break
    case 'danger':
      bannerIcon = dangerIcon
      colorClass = 'red-light'
      break
    case 'info':
      bannerIcon = infoIcon
      colorClass = 'blue-light'
      break
    default:
      bannerIcon = defaultIcon
      colorClass = 'gray-light'
  }

  const className = clsx('banner', colorClass)

  return (
    <article className={className}>
      <img src={bannerIcon} className='banner-icon' />
      <div className='banner-body'>
        {children}
      </div>
    </article>
  )
}