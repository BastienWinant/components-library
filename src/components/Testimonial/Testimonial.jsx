import clsx from "clsx"

export default function Testimonial({children, type}) {
  const testimonialClasses = clsx('testimonial-inner', type === 'desktop' && 'testimonial-desktop')

  return (
    <article className="testimonial">
      <div className={testimonialClasses}>
        {children}
      </div>
    </article>
  )
}