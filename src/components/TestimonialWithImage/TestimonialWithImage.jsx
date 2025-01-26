import clsx from 'clsx'
import './TestimonialWithImage.css'
import quoteMark from "./img/blockquote.svg"

export default function TestimonialWithoutImage({type, imgSrc}) {
  const containerClasses = clsx('testimonial-container', type === "mobile" ? "testimonial-mobile" : "testimonial-desktop")
  return (
    <article className="testimonial">
      <div className={containerClasses}>
        <img src={imgSrc} alt="Portrait." className="testimonial-img" />
        <figure className="testimonial-figure">
          <img src={quoteMark} alt="Quotation mark." />
          <blockquote className="testimonial-quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
          </blockquote>
          <figcaption className="testimonial-caption">
            <p className="testimonial-name">May Andersons</p>
            <p className="testimonial-title">Workcation, CTO</p>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}