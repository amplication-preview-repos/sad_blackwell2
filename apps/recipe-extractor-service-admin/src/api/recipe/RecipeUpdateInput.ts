import { IngredientUpdateManyWithoutRecipesInput } from "./IngredientUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  ingredients?: IngredientUpdateManyWithoutRecipesInput;
  recipeIngredients?: string | null;
  recipeTitle?: string | null;
  recipeUrl?: string | null;
  title?: string | null;
  url?: string | null;
  userRelation?: string | null;
};
