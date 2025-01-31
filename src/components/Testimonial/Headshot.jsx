export default function Headshot({imgSrc, layout}) {
  return (
    <img src={imgSrc} className={`headshot-img ${layout}`} alt='Testimonial headshot.' />
  )
}