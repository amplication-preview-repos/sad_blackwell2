import { Ingredient } from "../ingredient/Ingredient";

export type Recipe = {
  createdAt: Date;
  id: string;
  ingredients?: Array<Ingredient>;
  recipeIngredients: string | null;
  recipeTitle: string | null;
  recipeUrl: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  userRelation: string | null;
};
