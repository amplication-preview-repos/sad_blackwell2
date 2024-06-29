import { Recipe } from "../recipe/Recipe";

export type Ingredient = {
  createdAt: Date;
  id: string;
  name: string | null;
  quantity: string | null;
  recipe?: Recipe | null;
  updatedAt: Date;
};
