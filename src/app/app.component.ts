import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  childevent:any;
  forinputcomp2:string="hii this message from appcomponent "

  forinputcomponent =[ 
    {anvesh:"anvesh", id:1},
    {anvesh:"akhil", id:2},
    {anvesh:"akki", id:3},
  
  ]
  ///rxjs observable working ///
  // operonDOM:any
  // obser=new Observable(function(movie){
  //       movie.next("scence-1");
  //       movie.next("scence-2");
  //       movie.next("scence-3");
  //       movie.next("scence-4");
  //       movie.next("scence-5");
  //       setTimeout(function(){
  //     movie.next("brake happen")
  //   },10000)
  //   movie.next("snakes eaten")
  // })
  // constructor(){
  //   this.obser.subscribe({
  //     next:(x)=>{
  //       this.operonDOM=x
  //     console.log(x)
  //     },error:()=>{
  //       console.log("error occured")
  //     },complete:()=>{
  //       console.log("session complted")
  //     }
  //   })
  // }


  
 
}
