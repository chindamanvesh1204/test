 import { Component, EventEmitter, Input, OnInit,Output,  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Input() fromparentstudentdata:any;
  @Input() fromparent:any;
  @Output() notifyparent =new EventEmitter();
hai="hai hello outputdecorator"
PassToParent(){
  this.notifyparent.emit(this.hai)
}

testcase(){
  console.log(this);
}

  constructor() { }

  ngOnInit(): void {
  }

}
function output() {
  throw new Error('Function not implemented.');
}

