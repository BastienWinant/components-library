import clsx from 'clsx';
import { Children, cloneElement } from 'react'
import gridIcon from './img/gallery-layout.svg'
import Logo from '../Logo/Logo';

export default function Testimonial({children, layout}) {
    const hasImg = Children.toArray(children).find(child => child.type.name === 'Headshot') !== undefined
    
    const testimonialClasses = clsx('testimonial', layout || 'mobile', hasImg && 'testimonial-with-img')
    
    return (
        <article className={testimonialClasses}>
            {!hasImg && <img className='bottom-right-img' src={gridIcon} alt='Decorative dots grid' />}
            <div className={clsx('testimonial-inner', layout || 'mobile')}>
                {!hasImg && <Logo />}
                {Children.map(children, (child) => {
                    return cloneElement(child, {hasImg, layout: layout || 'mobile'})
                })}
            </div>
        </article>
    )
}