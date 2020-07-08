import { Component, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{
@ViewChild('nameInfo',{static:false}) nameInfoRef : ElementRef;
@ViewChild('amountInfo',{static:false}) amountInfoRef : ElementRef;
@Output() ingredientInfo = new EventEmitter<Ingredient>();

  addItem(){
    const addName = this.nameInfoRef.nativeElement.value;
    const addAmount = this.amountInfoRef.nativeElement.value;
    const ingredientAdded = new Ingredient(addName,addAmount);
    this.ingredientInfo.emit(ingredientAdded);
  }
}


