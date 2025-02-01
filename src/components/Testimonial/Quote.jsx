import clsx from 'clsx'
import blockQuote from './img/blockquote.svg'

export default function Quote({children, layout, hasImg, name, role, company}) {
    const quoteText = `${hasImg ? "" : "“"}${children}${hasImg ? "" : "”"}`
    const titleSeparator = <span className='title-separator'>{hasImg ? ', ' : ' / '}</span>
    return (
        <figure className={clsx('quote-figure', layout)}>
            {hasImg && <img src={blockQuote} alt='Quotation mark icon.' />}
            <blockquote className='quote'>
                {quoteText}
            </blockquote>
            <figcaption className='quote-caption'>
                <p className='quote-name'>{name || 'Anonymous'}</p>
                {(role || company) &&
                    <p className='quote-title'>
                        {role && <span className='quote-role'>{role}</span>}
                        {role && company && titleSeparator}
                        {company && <span className='quote-company'>{company}</span>}
                    </p>
                }
            </figcaption>
        </figure>
    )
}