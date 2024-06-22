import { FC } from 'react'

type IngredientsProps = {
    ingredients: string[];
}

export const Ingredients: FC<IngredientsProps> = ({
    ingredients
}) => {

    return (
        <section className='flex flex-col gap-3' >
            <h3 className='text-Nutmeg font-Young-Serif text-2xl'>Ingredients</h3>
            <ul className='marker:text-Dark-Raspberry list-inside list-none' >
                {ingredients.map(ingredient => (
                    <li className='py-0.5 before:pl-2 before:content-["•"] before:text-Dark-Raspberry before:items-center before:flex flex'>
                        <p className='pl-5 text-sm font-Outfit text-Wenge-Brown'>{ingredient}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
