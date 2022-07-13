import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    childevent:any;

   forinputcomp2:string="hii this message from parentComponent ";
   forinputcomponent =[ 
    {anvesh:"anvesh", id:1},
    {anvesh:"akhil", id:2},
    {anvesh:"akki", id:3},
  
  ]





}
