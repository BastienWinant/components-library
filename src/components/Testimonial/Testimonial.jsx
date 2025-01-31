import clsx from 'clsx'
import { Children, cloneElement } from 'react'
import dotGrid from './img/gallery-layout.svg'

export default function Testimonial({children}) {
  // determine whether a headshot component is included
  const withImg = Children.toArray(children)
                          .find(child => child.type.name === 'Headshot') !== undefined

  const testimonialClasses = clsx('testimonial', withImg && 'testimonial-with-img')
  
  return (
    <article className={testimonialClasses}>
      <div className='testimonial-inner'>
        {!withImg && <img src={dotGrid} className='bottom-left-img' alt='Decorative dot grid.' />}
        {Children.map(children, child => cloneElement(child, {withImg}))}
      </div>
    </article>
  )
}