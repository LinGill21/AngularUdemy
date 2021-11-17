import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is a test','https://www.google.com/search?q=recipe+card&tbm=isch&ved=2ahUKEwi3j867taD0AhVO_6wKHTAbBvMQ2-cCegQIABAA&oq=recipe+card&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BwgAELEDEEM6BAgAEENQigVY3gtgzg5oAHAAeACAAWiIAboEkgEDNS4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=XX6VYffsM87-swWwtpiYDw&bih=754&biw=1536&rlz=1C1VDKB_enUS931US931#imgrc=jN2DPTDSH4AhsM')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
