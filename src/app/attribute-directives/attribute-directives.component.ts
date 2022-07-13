import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css'],
})
export class AttributeDirectivesComponent implements OnInit {
  names: any[] = [1, 2, 3, 3, 3, 3];
  name: any[] = [];

  clickname() {
    this.names[0] = 1;
    this.names[1] = 'avi';
    this.names[2] = 100;

    this.names.unshift('name');
    this.names.filter((elements) => {
      if (!this.name.includes(elements)) {
        this.name.push(elements);
        console.log(this.name);
      }
    });
  }
clickname1(event:any){
  console.log(event)
}

 

  constructor() {
    
  }
  ngOnInit(): void {}

  testColor = { color: 'blue' };
  testColor2 = { color: 'yellow' };
  TestedValue = true;

  firstDiv = 'activeClass';
  secondDiv = 'inactiveClass';

  CheckValue = 'myname';
}
