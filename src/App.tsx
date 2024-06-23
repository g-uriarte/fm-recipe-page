import { RecipeContainer } from "./components/RecipeContainer"
import { RECIPE } from "./data/receiptData"

export const App = () => {
	return (
		<div className="h-100dvh w-100dvw flex justify-center items-center content-center bg-Eggshell xl:h-[100%]">
			<RecipeContainer recipe={RECIPE} />
		</div>
	)
}
