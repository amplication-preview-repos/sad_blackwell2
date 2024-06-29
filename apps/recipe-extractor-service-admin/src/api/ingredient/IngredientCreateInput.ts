import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientCreateInput = {
  name?: string | null;
  quantity?: string | null;
  recipe?: RecipeWhereUniqueInput | null;
};
