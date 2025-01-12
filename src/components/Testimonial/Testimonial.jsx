export default function Testimonial({children, imgSrc}) {
  let imgAltText = imgSrc ? "Portrait" : "Company logo"
  return (
    <article className="testimonial">
      <div className="testimonial-container">
        <img className="testimonial-img" src={imgSrc} alt={imgAltText} />
        {children}
        {/* <figure className="testimonial-body">
          <img src={blockQuoteIcon} alt="Quotation mark" />
          <blockquote className="testimonial-quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, maxime aut. Ullam in ipsa delectus aut placeat deleniti rerum consequuntur beatae, nostrum velit, eos, iusto voluptas? Sunt sit at ea?
          </blockquote>
          <figcaption className="testimonial-caption">
            <p className="testimonial-name">May Andersons</p>
            <p className="testimonial-title">Workcation, CTO</p>
          </figcaption>
        </figure> */}
      </div>
    </article>
  )
}