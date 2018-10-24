import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
 import 'rxjs/Rx';

@Injectable()
export class LeaveHistoryService {
 url:string ="http://localhost:3000/reqleave";
  constructor(public http:Http) { }

  getLeaveHistory(){
    return this.http.get(this.url)
    .map((res:Response) => res.json());
   
  }
  
}
