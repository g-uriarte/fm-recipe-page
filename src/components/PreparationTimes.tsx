import { FC } from 'react'
import { PreparationTimes as TPreparationTimes } from '../types'

type PreparationTimesProps = {
    preparationTimes: TPreparationTimes
}

const ItemListTime: FC<{ name: string, time: string; }> = ({
    name, time
}) => {

    return (
        <li className='py-0.5 before:content-["•"] before:text-Dark-Raspberry before:items-center before:flex flex'>
            <p className='pl-5 text-sm font-Outfit text-Wenge-Brown ' >
                <span className='font-semibold pr-1'>
                    {name}:
                </span>
                {time}
            </p>
        </li>
    )
}

export const PreparationTimes: FC<PreparationTimesProps> = ({
    preparationTimes
}) => {

    const items = [
        { name: 'Total', time: preparationTimes.total },
        { name: 'Preparation', time: preparationTimes.preparation },
        { name: 'Cooking', time: preparationTimes.cooking },
    ]

    return (
        <div className='bg-Rose-White pt-5 px-5 pb-3 flex flex-col gap-2 rounded-md' >
            <p className='text-Dark-Raspberry font-bold text-lg' >Preparation time</p>
            <ul className='marker:text-Dark-Raspberry list-inside list-none' >
                {items.map(itemTime => (
                    <ItemListTime key={itemTime.name} name={itemTime.name} time={itemTime.time} />
                ))}
            </ul>
        </div>
    )
}
