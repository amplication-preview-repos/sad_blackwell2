import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientUpdateInput = {
  name?: string | null;
  quantity?: string | null;
  recipe?: RecipeWhereUniqueInput | null;
};
