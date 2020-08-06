import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{
@ViewChild('nameInfo') nameInfoRef : ElementRef;
@ViewChild('amountInfo') amountInfoRef : ElementRef;

  constructor(private slService:ShoppingListService){}

  addItem(){
    const addName = this.nameInfoRef.nativeElement.value;
    const addAmount = this.amountInfoRef.nativeElement.value;
    const ingredientAdded = new Ingredient(addName,addAmount);
    this.slService.onIngredientAdded(ingredientAdded);
  }
}


