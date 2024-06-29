import { Recipe as TRecipe } from "../api/recipe/Recipe";

export const RECIPE_TITLE_FIELD = "recipeTitle";

export const RecipeTitle = (record: TRecipe): string => {
  return record.recipeTitle?.toString() || String(record.id);
};
