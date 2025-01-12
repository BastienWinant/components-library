export default function Testimonial({children, imgSrc}) {
  let imgAltText = imgSrc ? "Portrait" : "Company logo"
  return (
    <article className="testimonial">
      <div className="testimonial-container">
        <img className="testimonial-img" src={imgSrc} alt={imgAltText} />
        {children}
      </div>
    </article>
  )
}