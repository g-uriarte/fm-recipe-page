export interface PreparationTimes {
    total: string;
    preparation: string;
    cooking: string;
}

export interface Instruction {
    title: string;
    description: string;
}

export interface NutritionItem {
    name: string;
    amount: string;
}

export interface NutritionInformation {
    description: string;
    nutritionItems: NutritionItem[];
}


export interface Recipe {
    title: string;
    description: string;
    image: string;
    preparationTimes: PreparationTimes;
    ingredients: string[];
    instructions: Instruction[];
    nutritionInformation: NutritionInformation;
}
