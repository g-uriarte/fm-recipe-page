import { FC } from 'react'
import { NutritionInformation, NutritionItem } from '../types'
import { SectionTitle } from './SectionTitle';
import { Section } from './Section';

type NutritionProps = {
    nutrition: NutritionInformation;
}

const TableRow: FC<{ item: NutritionItem }> = ({
    item
}) => {

    return (
        <tr className='text-sm'>
            <td className='pl-4 border-b border-b-Light-Grey p-3' >{item.name}</td>
            <td className='text-left font-semibold text-Nutmeg border-b border-b-Light-Grey' >{item.amount}</td>
        </tr>
    )
}

export const Nutrition: FC<NutritionProps> = ({
    nutrition
}) => {

    return (
        <Section>
            <SectionTitle title='Nutrition' />
            <table className='text-Wenge-Brown table-fixed w-full border-separate border-spacing-y-0'>
                <caption className='text-left text-sm font-thin mb-3' >{nutrition.description}</caption>
                <tbody className='last-tr-td:border-0'>
                    {nutrition.nutritionItems.map(item => (
                        <TableRow key={item.name} item={item} />
                    ))}
                </tbody>
            </table>
        </Section>
    )
}
