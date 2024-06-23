import { RecipeContainer } from "./components/RecipeContainer"
import { RECIPE } from "./data/recipe"

export const App = () => {
	return (
		<div className="h-100dvh w-100dvw flex justify-center items-center content-center bg-Eggshell xl:h-[100%] xl:w-full">
			<RecipeContainer recipe={RECIPE} />
		</div>
	)
}
