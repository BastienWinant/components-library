import inboxIcon from "./img/archive.svg"

export default function TooltipBox(props) {
  return (
    <div className="tooltip-box">
      <img src={inboxIcon} alt="inbox icon" />
      <section>
        <p>{props.title}</p>
        <p>{props.detail}</p>
      </section>
    </div>
  )
}