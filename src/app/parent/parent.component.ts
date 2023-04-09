import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childre: any;

  myProf: string = '';
  constructor() {}

  clicktoemit() {
    this.myProf = this.childre.Prof;
    console.log(this.myProf);
  }

  ngOnInit(): void {}

  childevent: any;
  filename: any;

  forinputcomp2: string = 'hii this message from parentComponent ';
  forinputcomponent = [
    { anvesh: 'anvesh', id: 1 },
    { anvesh: 'akhil', id: 2 },
    { anvesh: 'akki', id: 3 },
  ];

  //for data sharing to child component //
  counter: number = 0;
  incrimentalnumber() {
    this.counter++;
  }
  /////////////////// Using this space for life cycle hook//////////

  public Numbers: number = 0;
  isVisible: boolean = true;

  get number() {
    return this.Numbers;
  }

  set number(val) {
    this.Numbers = val;
  }

  incrimental() {
    this.number++;
  }

  decremental() {
    this.number--;
  }
  destroy() {
    this.isVisible = !this.isVisible;
  }

  uploadfilesecondsenario(e: any): void {
    console.log(e.target.value);
    this.filename = e.target.value;
  }
}
