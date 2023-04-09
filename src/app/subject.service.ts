import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectnotification = new Subject()

  constructor() { }

  sendnotification(data:any){
    this.subjectnotification.next(data)
  }

}
