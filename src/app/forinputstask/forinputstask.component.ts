import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-forinputstask',
  templateUrl: './forinputstask.component.html',
  styleUrls: ['./forinputstask.component.css']
})
export class ForinputstaskComponent implements OnInit {
  fromsubjectdata:any
  textinput:any="";
  number1:number=0
  number2:number=0
  cal:any;

  getvalue(val:string){
    console.log(val)
      this.textinput=val
     
  }
  
   
   additiondata(){
    this.cal = this.number1+this.number2
   // this.cal=this.number1+this.number2
   }
  senddata(data:any){
    this.subjectservic.sendnotification(data.value)
    console.log(data.value)

  }
  constructor(private subjectservic:SubjectService) { 
    this.subjectservic.subjectnotification.subscribe((data)=>
{
  this.fromsubjectdata=data
}
    )
  }

  ngOnInit(): void {
  }

}
