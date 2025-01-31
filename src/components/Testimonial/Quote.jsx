import blockQuote from './img/blockQuote.svg'

export default function Quote({children, withImg, name, role, company}) {
  const quoteText = `${withImg ? '' : '“'}${children}${withImg ? '' : '”'}`
  const separator = <span className='separator'>{withImg ? ', ' : ' / '}</span>
  return (
    <figure className='quote-figure'>
      {withImg && <img src={blockQuote} alt='Quotation mark' />}
      <blockquote className='quote'>{quoteText}</blockquote>
      <figcaption className='quote-caption'>
        <p className='quote-name'>{name || 'Anonymous'}</p>
        {(role || company) &&
          <p className='quote-title'>
            {role && <span className='quote-role'>{role}</span>}
            {role && company && separator}
            {company && <span className='quote-company'>{company}</span>}
          </p>
        }
      </figcaption>
    </figure>
  )
}