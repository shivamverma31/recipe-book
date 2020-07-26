import {Recipe} from './recipe.model'
import { EventEmitter } from '@angular/core';
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[]= [
    new Recipe(
    'Recipe 1',
    'description 1',
    'https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1'),
    new Recipe(
    'Recipe 2',
    'description 2',
    'https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1')];

   getRecipe(){
     return this.recipes.slice();
   }
}
