import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

getApiData(res : any){
  return of( res + ' is completed ')
}

  constructor() {
    const source = from( ['yogi ',' mrperfect','Bhahubali ']);
    source.pipe(
      mergeMap(( res : any) => this.getApiData(res))
    ).
    subscribe(resp => console.log(resp));
   }
  ngOnInit(): void {
  }

}
