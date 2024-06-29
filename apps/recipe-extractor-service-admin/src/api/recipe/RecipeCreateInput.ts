import { IngredientCreateNestedManyWithoutRecipesInput } from "./IngredientCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  ingredients?: IngredientCreateNestedManyWithoutRecipesInput;
  recipeIngredients?: string | null;
  recipeTitle?: string | null;
  recipeUrl?: string | null;
  title?: string | null;
  url?: string | null;
  userRelation?: string | null;
};
