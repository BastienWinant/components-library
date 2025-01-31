import "./logo.css"
import houseIcon from "./img/house-5.svg"

export default function Logo() {
  return (
    <figure className="logo">
      <img src={houseIcon} className="logo-img" alt="House logo icon." />
      <figcaption className="logo-text">
        Work<span>cation</span>
      </figcaption>
    </figure>
  )
}