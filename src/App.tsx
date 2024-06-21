import { RecipeContainer } from "./components/RecipeContainer"
import { RECIPE } from "./data/receiptData"

export const App = () => {
	return (
		<div className="h-100dvh w-100dvw flex justify-center">
			<RecipeContainer recipe={RECIPE} />
		</div>
	)
}
