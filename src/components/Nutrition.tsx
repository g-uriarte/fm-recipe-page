import { FC } from 'react'
import { NutritionInformation, NutritionItem } from '../types'

type NutritionProps = {
    nutrition: NutritionInformation;
}

const TableRow: FC<{ item: NutritionItem }> = ({
    item
}) => {

    return (
        <tr className='text-sm'>
            <td className='pl-4 border-b border-b-Light-Grey ' >{item.name}</td>
            <td className='text-left font-semibold text-Nutmeg border-b border-b-Light-Grey ' >{item.amount}</td>
        </tr>
    )
}

export const Nutrition: FC<NutritionProps> = ({
    nutrition
}) => {

    {/* Nutrition */ }
    {/* Nutrition caption */ }
    {/* Table content */ }

    return (
        <section className='flex flex-col gap-2'>
            <h3 className='text-Nutmeg font-Young-Serif text-2xl'>Nutrition</h3>
            <table className='text-Wenge-Brown table-fixed w-full border-separate border-spacing-y-3'>
                <caption className='text-left text-sm font-thin mb-3' >{nutrition.description}</caption>
                <tbody className='last-tr-td:border-0'>
                    {nutrition.nutritionItems.map(item => (
                        <TableRow item={item} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}
