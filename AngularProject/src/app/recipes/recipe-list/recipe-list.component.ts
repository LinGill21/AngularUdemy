import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is a test','https://github.com/LinGill21/AngularUdemy/raw/Project/AngularProject/recipeCard.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
