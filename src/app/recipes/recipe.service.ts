import { ShoppingListService } from './../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[]= [
    new Recipe(
    'Shahi Paneer',
    'Shahi Paneer Recipe',
    'https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1',
    [
      new Ingredient('Paneer',100),
      new Ingredient('Capsicum',50)
    ]
    ),
    new Recipe(
    'Matar Paneer',
    'Matar Paneer Recipe',
    'https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1',
    [
      new Ingredient('Paneer',100),
      new Ingredient('Matar',50)
    ]
    )];

    constructor(private slService:ShoppingListService){}

   getRecipe(){
     return this.recipes.slice();
   }

   addToShoppingList(ingredients:Ingredient[]){
    this.slService.onIngredientsAdded(ingredients);
   }
}
