import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {
  username=''
  constructor() { }

  ngOnInit(): void {
  }
  checkUsername(){
    if (this.username.length ==0){
      return true;
    }
    return false;
  }
  reset(){
    this.username=''
  }
}
