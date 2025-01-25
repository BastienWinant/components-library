import './TestimonialWithImage.css'

export default function TestimonialWithImage({imgSrc, axis, ...}) {
  return (
    <article className="testimonial-with-img">
      <img src={imgSrc} alt="Portrait." className="testimonial-img" />
      <figure className="testimonial-figure">
        <blockquote className="testimonial-quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed urna nulla vitae laoreet augue.
          Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </blockquote>
        <figcaption className="testimonial-caption">
          <p className="testimonial-name">May Andersons</p>
          <p className='testimonial-title'>Workcation, CTO</p>
        </figcaption>
      </figure>
    </article>
  )
}