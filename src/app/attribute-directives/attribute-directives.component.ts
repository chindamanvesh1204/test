import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css'],
})
export class AttributeDirectivesComponent implements OnInit {
  names: any[] = [1, 2, 3, 3, 3, 3];
  name: any[] = [];

//this variable mentioned for call subject operator which is subscribing from subjectservice.ts//
  subjectdata:any

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

  constructor(public subjectservic:SubjectService) {
///this data coming from subjectservice for subject operator//
  this.subjectservic.subjectnotification.subscribe({
    next:(subjectvalue)=>{
      this.subjectdata=subjectvalue
      console.log(this.subjectdata)
    }
  })
    
  }
  ngOnInit(): void {}

  testColor = { color: 'blue' };
  testColor2 = { color: 'yellow' };
  TestedValue = true;
  firstDiv = 'activeClass';
  secondDiv = 'inactiveClass';
  CheckValue = 'myname';
}
