import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
  displayDetails = false;
  log =[0];

  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(){
    this.log.push(this.log.length);
    if(this.displayDetails===true){
      this.displayDetails =false;
    }
    else{
      this.displayDetails =true;
  }
}
}
