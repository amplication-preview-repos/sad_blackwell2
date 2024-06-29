import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  recipeIngredients?: SortOrder;
  recipeTitle?: SortOrder;
  recipeUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userRelation?: SortOrder;
};
