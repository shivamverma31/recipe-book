import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // secretCheck:boolean;
  // countLog:any[];
  // secretMsg:string;

  recipes: Recipe[]= [
    new Recipe('Test', 'This is a test','https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1'),
    new Recipe('Test', 'This is a test','https://th.bing.com/th/id/OIP.-703v8PMVC2RjgzIxd6usgHaE7?pid=Api&rs=1')];

  constructor() {
    // this.secretCheck=false;
    // this.countLog=[];
    // this.secretMsg='Secret code = tuna';
   }
  // chkClick(){
  //   this.countLog.push(new Date());
  //   this.secretCheck = !this.secretCheck;
  // }


  ngOnInit() {
  }

}
