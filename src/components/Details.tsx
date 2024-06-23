import { FC } from 'react'

type DetailsProps = {
    title: string;
    description: string;
}

export const Details: FC<DetailsProps> = ({
    title, description
}) => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='font-Young-Serif text-3xl text-Dark-Charcoal ' >{title}</h1>
            <p className='font-Outfit text-Wenge-Brown'>{description}</p>
        </div>
    )
}
