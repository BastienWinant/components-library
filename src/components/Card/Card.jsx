export default function Card({children, iconSrc}) {
  return (
    <article className="card">
      <figure className="card-figure">
        <img src={iconSrc} alt="Card icon" className="card-img" />
      </figure>
      {children}
    </article>
  )
}