import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() fromparentstudentdata:any;
  @Input() fromparent:any;
  @Output() notifyparent =new EventEmitter(); 
  @Input() counter:any;

 Prof:string="Software engineer"
  hai="hai hello outputdecorator";

    
  PassToParent(){
    this.notifyparent.emit(this.hai)
  }
  




  constructor() { 
    console.log('childcomponent',this.counter)
  }

  ngOnInit(): void {
  }
 
}
