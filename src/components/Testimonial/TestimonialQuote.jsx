import blockQuoteIcon from "./img/blockquote.svg"

export default function TestimonialQuote({children, name, title}) {
  return (
    <figure className="testimonial-body">
      <img src={blockQuoteIcon} alt="Quotation mark" />
      <blockquote className="testimonial-quote">
        {children}
      </blockquote>
      {(name || title) && <figcaption className="testimonial-caption">
        {name && <p className="testimonial-name">{name}</p>}
        {title && <p className="testimonial-title">{title}</p>}
      </figcaption>}
    </figure>
  )
}