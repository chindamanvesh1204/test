import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gettersetter',
  templateUrl: './gettersetter.component.html',
  styleUrls: ['./gettersetter.component.css']
})
export class GettersetterComponent implements OnInit {


   public textstr:string=" ";
   private _age:any;
   public updatedage:any;
   public updatedage1:any ;

   get page(){
      return this._age;
   }
   
   set page(val){
    this._age=val;

    if(val >= 18){
  this.updatedage="your elible"
   console.log("ur eligible ");
   }else{
    this.updatedage1= "ur not eligible";
    console.log("ur age below 18 years ");
   }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
