import clsx from 'clsx'
import { Children, cloneElement } from 'react'
import dotGrid from './img/gallery-layout.svg'
import Logo from './Logo'

export default function Testimonial({children, layout}) {
  // determine whether a headshot component is included
  const withImg = Children.toArray(children)
                          .find(child => child.type.name === 'Headshot') !== undefined

  const testimonialClasses = clsx('testimonial', layout || 'desktop', withImg && 'testimonial-with-img')
  
  return (
    <article className={testimonialClasses}>
      <div className={`testimonial-inner ${layout}`}>
        {!withImg && <Logo />}
        {!withImg && <img src={dotGrid} className='bottom-left-img' alt='Decorative dot grid.' />}
        {Children.map(children, child => cloneElement(child, {withImg, layout: layout || 'desktop'}))}
      </div>
    </article>
  )
}