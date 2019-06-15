import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  count = [];
  push: any;
  CountFun() {
    
    this.count.push(this.count.length + 1);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
