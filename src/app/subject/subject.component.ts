import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectservic:SubjectService) { }

  ngOnInit(): void {
  }
  // sendnotification(data:any){
  //   this.subjectnotification.next(data)
  // }


  senddata(data:any){
    this.subjectservic.sendnotification(data.value)
    
    console.log(data.value)

  }

}
