import './Card.css'

export default function Card({children, logoSrc}) {
  return (
    <article className="card">
      <figure className="card-figure">
        <img className="card-img" src={logoSrc} />
      </figure>
      {children}
    </article>
  )
}