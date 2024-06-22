import { FC } from 'react'
import { Recipe } from '../types'
import { Details } from './Details'
import { Image } from './Image'
import { PreparationTimes } from './PreparationTimes'
import { Ingredients } from './Ingredients'
import { Instructions } from './Instructions'
import { Nutrition } from './Nutrition'
import { Separator } from './Separator'

type RecipeContainerProps = {
    recipe: Recipe
}

export const RecipeContainer: FC<RecipeContainerProps> = ({
    recipe,
}) => {

    return (
        <div className='w-full h-full'>
            <div className=''>
                <Image alt={recipe.description} src={recipe.image} />
            </div>
            <div className='p-5 flex flex-col gap-3' >
                <Details title={recipe.title} description={recipe.description} />
                <PreparationTimes  preparationTimes={recipe.preparationTimes} />
                <Ingredients ingredients={recipe.ingredients} />
                <Separator />
                <Instructions steps={recipe.instructions} />
                <Separator />
                <Nutrition />
            </div>
        </div>
    )
}
