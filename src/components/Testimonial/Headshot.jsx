import clsx from 'clsx'

export default function Headshot({imgSrc, layout}) {
    return (
        <img className={clsx('headshot', layout)} alt='Headshot.' src={imgSrc} />
    )
}