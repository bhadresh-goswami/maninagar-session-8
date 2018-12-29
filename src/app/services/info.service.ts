import { Injectable } from '@angular/core';
import { InfoModel } from '../Models/info-model';
import { Observable } from '../../../node_modules/rxjs';
import { resolveSoa } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  list: InfoModel[] = [
    { name: "bhadresh", course: "iOS" },
    { name: "hitesh", course: "Angular" },
    { name: "satish", course: "Angular" },
    { name: "Bhavini", course: "iOS" }
  ];

  constructor() { }
  re = "";
  // public getInfo(s: string): Observable<InfoModel[]> {
  //   //this.re = search;
  //   //   //var data = this.list.filter(this.find);
  //   //   return  this.list.filter(this.find);
  //   // }

  //   // find(ele, index, arr):Observable<InfoModel[]> {
  //   //   return ele.name.search(this.re) > 0;
  //   return  this.list.filter(res=>{
  //     return res.name.search(s)
  //   }) as Observable<InfoModel[]>;


  //}

}
