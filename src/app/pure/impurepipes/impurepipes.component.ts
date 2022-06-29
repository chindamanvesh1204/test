import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impurepipes',
  templateUrl: './impurepipes.component.html',
  styleUrls: ['./impurepipes.component.css']
})
export class ImpurepipesComponent implements OnInit {

  seaerchtext:any="";


  employes=[
    {EmpNo:1,name:"chindam",disignation:'developer'},
    {EmpNo:2,name:"bhairi",disignation:'tester'},
    {EmpNo:3,name:"udutha",disignation:'bpo'},
    {EmpNo:4,name:"chkanipaka",disignation:'teacher'},
  ]
  
  
  addemp(){
    console.log("aaa")
    this.employes.push({EmpNo:5,name:"vanga",disignation:'gm'});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
