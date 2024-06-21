import { FC } from 'react'
import { PreparationTimes as TPreparationTimes } from '../types'

type PreparationTimesProps = {
    preparationTimes: TPreparationTimes
}

const ItemListTime: FC<{ name: string, time: string; }> = ({
    name, time
}) => {

    {/* <li className=' py-0.5' >
            <p className='inline pl-3'>
                <span className='font-semibold' >{name}: </span>
                {time}
            </p>
        </li> */}

    return (

        <li className='py-0.5 before:content-["•"] flex'>
            <p className='pl-5' >
                <span className='font-semibold pr-2'>
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

    {/* Preparation time */ }
    {/* List 3 items (total, preparation, cooking) [dots] */ }

    const items = [
        { name: 'Total', time: preparationTimes.total },
        { name: 'Preparation', time: preparationTimes.preparation },
        { name: 'Cooking', time: preparationTimes.cooking },
    ]

    return (
        <div className='bg-Rose-White p-5 flex flex-col gap-3' >
            <p className='text-Dark-Raspberry font-bold text-lg' >Preparation time</p>
            <ul className='marker:text-Dark-Raspberry list-inside list-none' >
                {items.map(itemTime => (
                    <ItemListTime key={itemTime.name} name={itemTime.name} time={itemTime.time} />
                ))}
            </ul>
        </div>
    )
}
