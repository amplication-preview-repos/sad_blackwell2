import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RECIPE_TITLE_FIELD } from "./RecipeTitle";

export const RecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="recipe_ingredients" source="recipeIngredients" />
        <TextField label="recipe_title" source="recipeTitle" />
        <TextField label="recipe_url" source="recipeUrl" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <TextField label="user_relation" source="userRelation" />
        <ReferenceManyField
          reference="Ingredient"
          target="recipeId"
          label="Ingredients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="quantity" source="quantity" />
            <ReferenceField
              label="Recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
