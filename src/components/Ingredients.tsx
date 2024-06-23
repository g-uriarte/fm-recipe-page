import { FC } from 'react'
import { SectionTitle } from './SectionTitle';
import { Section } from './Section';

type IngredientsProps = {
    ingredients: string[];
}

export const Ingredients: FC<IngredientsProps> = ({
    ingredients
}) => {

    return (
        <Section>
            <SectionTitle title='Ingredients' />
            <ul className='marker:text-Dark-Raspberry list-inside list-none' >
                {ingredients.map(ingredient => (
                    <li key={ingredient} className='py-0.5 before:pl-2 before:content-["•"] before:text-Dark-Raspberry before:items-center before:flex flex'>
                        <p className='pl-5 text-sm font-Outfit text-Wenge-Brown'>{ingredient}</p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
