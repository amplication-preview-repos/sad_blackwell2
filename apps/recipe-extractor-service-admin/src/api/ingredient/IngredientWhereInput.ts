import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type IngredientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: StringNullableFilter;
  recipe?: RecipeWhereUniqueInput;
};
