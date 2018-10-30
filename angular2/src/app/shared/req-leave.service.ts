import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Reqleave} from './reqleave.model';
import 'rxjs/Rx';

@Injectable()
export class ReqLeaveService {
val:any;
reqlemp :Reqleave;
// reqleave: Reqleave[];
  url:string ="http://localhost:3000/reqleave";
  constructor(public http:Http) { }
  postreqleave(reqleave){
    return this.http.post(this.url,reqleave)
    .map((res:Response) => res.json());
   
  }
  

}
