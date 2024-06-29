import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { IngredientTitle } from "../ingredient/IngredientTitle";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="ingredients"
          reference="Ingredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IngredientTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="recipe_ingredients"
          multiline
          source="recipeIngredients"
        />
        <TextInput label="recipe_title" source="recipeTitle" />
        <TextInput label="recipe_url" source="recipeUrl" />
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
        <TextInput label="user_relation" source="userRelation" />
      </SimpleForm>
    </Edit>
  );
};
