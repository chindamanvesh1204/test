import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecylehooks',
  templateUrl: './lifecylehooks.component.html',
  styleUrls: ['./lifecylehooks.component.css'],
})
export class LifecylehooksComponent implements OnInit, OnChanges, DoCheck {
  @Input() num: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const NewChangeNum: SimpleChange = changes['num'];
    console.log(' NgOnChanges:()=> previous Value' + NewChangeNum.previousValue);
    console.log(' NgOnChanges:()=> current Value' + NewChangeNum.currentValue);
  }
  ngOnInit(): void {
    console.log(' NgOnInit:()=> current Value' + this.num);
  }

  ngDoCheck(): void {
    console.log(' NgDoCheck:()=> current Value' + this.num);
  }

  ngAfterContentInit() {
    console.log(' NgAfterContentInit:()=> current Value' + this.num);
  }
  ngAfterContentChecked() {
    console.log(' NgAfterContentChecked:()=> current Value' + this.num);
  }
  ngAfterViewInit() {
    console.log(' NgAfterViewInit:()=> current Value' + this.num);
  }
  ngAfterViewChecked() {
    console.log(' NgAfterViewChecked:()=> current Value' + this.num);
  }
  ngOnDestroy(){
    console.log('component Destroyed')
  }
}
