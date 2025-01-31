import quoteMark from './img/blockquote.svg'

export default function TestimonialQuote({children, name, company, title}) {
  return (
    <figure className="testimonial-figure">
      <img src={quoteMark} alt="" />
      <blockquote className="testimonial-quote">
        {children}
      </blockquote>
      <figcaption className="testimonial-caption">
        <p className="testimonial-name">{name}</p>
        {(company || title) &&
          <p className="testimonial-role">
            {company}
            {company && title ? ", " : ""}
            {title}
          </p>}
      </figcaption>
    </figure>
  )
}