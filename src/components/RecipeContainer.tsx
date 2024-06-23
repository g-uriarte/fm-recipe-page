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
        <div className='w-full h-full flex flex-col bg-White xl:w-[650px] xl:rounded-xl xl:p-8 xl:gap-5 xl:my-24'>
            <div className='xl:rounded-lg xl:overflow-hidden'>
                <Image alt={recipe.description} src={recipe.image} className='xl:object-cover' />
            </div>
            <div className='p-5 flex flex-col gap-5 xl:p-0' >
                <Details title={recipe.title} description={recipe.description} />
                <PreparationTimes  preparationTimes={recipe.preparationTimes} />
                <Ingredients ingredients={recipe.ingredients} />
                <Separator />
                <Instructions steps={recipe.instructions} />
                <Separator />
                <Nutrition nutrition={recipe.nutritionInformation} />
            </div>
        </div>
    )
}
