/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Recipe } from "./Recipe";
import { RecipeCountArgs } from "./RecipeCountArgs";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeFindUniqueArgs } from "./RecipeFindUniqueArgs";
import { CreateRecipeArgs } from "./CreateRecipeArgs";
import { UpdateRecipeArgs } from "./UpdateRecipeArgs";
import { DeleteRecipeArgs } from "./DeleteRecipeArgs";
import { IngredientFindManyArgs } from "../../ingredient/base/IngredientFindManyArgs";
import { Ingredient } from "../../ingredient/base/Ingredient";
import { RecipeService } from "../recipe.service";
@graphql.Resolver(() => Recipe)
export class RecipeResolverBase {
  constructor(protected readonly service: RecipeService) {}

  async _recipesMeta(
    @graphql.Args() args: RecipeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Recipe])
  async recipes(@graphql.Args() args: RecipeFindManyArgs): Promise<Recipe[]> {
    return this.service.recipes(args);
  }

  @graphql.Query(() => Recipe, { nullable: true })
  async recipe(
    @graphql.Args() args: RecipeFindUniqueArgs
  ): Promise<Recipe | null> {
    const result = await this.service.recipe(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Recipe)
  async createRecipe(@graphql.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return await this.service.createRecipe({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Recipe)
  async updateRecipe(
    @graphql.Args() args: UpdateRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.updateRecipe({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recipe)
  async deleteRecipe(
    @graphql.Args() args: DeleteRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.deleteRecipe(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Ingredient], { name: "ingredients" })
  async findIngredients(
    @graphql.Parent() parent: Recipe,
    @graphql.Args() args: IngredientFindManyArgs
  ): Promise<Ingredient[]> {
    const results = await this.service.findIngredients(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
