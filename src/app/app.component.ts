import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
 

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

    final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(
    map(e => e.response)
                     )
    getdata(){
    this.api.get('https://jsonplaceholder.typicode.com/users').subscribe((abc)=>{
      console.log(abc)
    })

    }
  constructor(private api:HttpClient){
     
      this.final_val.subscribe((a)=>{
       console.log(a)
     })
  }

 
}
