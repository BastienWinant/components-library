import blockQuoteIcon from "./img/blockquote.svg"

export default function Testimonial({children, imgSrc}) {
  let imgAltText = imgSrc ? "Portrait" : "Company logo"
  return (
    <article className="testimonial">
      <img src={imgSrc} alt={imgAltText} className="testimonial-img" />
      <figure className="testimonial-body">
        <img src={blockQuoteIcon} alt="Blockquote" />
        <blockquote className="testimonial-quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </blockquote>
        <figcaption className="testimonial-caption">
          <p>Mary Andersons</p>
          <p>Workcation, CTO</p>
        </figcaption>
      </figure>
    </article>
  )

}