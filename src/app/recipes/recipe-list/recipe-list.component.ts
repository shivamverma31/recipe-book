import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]= [
    new Recipe('Recipe 1', 'description 1','https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1'),
    new Recipe('Recipe 2', 'description 2','https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1')];

  constructor() {

   }



  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
