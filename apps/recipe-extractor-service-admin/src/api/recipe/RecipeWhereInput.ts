import { StringFilter } from "../../util/StringFilter";
import { IngredientListRelationFilter } from "../ingredient/IngredientListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  ingredients?: IngredientListRelationFilter;
  recipeIngredients?: StringNullableFilter;
  recipeTitle?: StringNullableFilter;
  recipeUrl?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  userRelation?: StringNullableFilter;
};
