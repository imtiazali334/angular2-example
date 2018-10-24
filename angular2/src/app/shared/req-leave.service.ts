import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
// import { Reqleave} from './reqleave.model';
import 'rxjs/Rx';

@Injectable()
export class ReqLeaveService {
val:any;
// reqleave: Reqleave[];
  url:string ="http://localhost:3000/reqleave";
  constructor(public http:Http) { }
  postreqleave(reqlv){
    return this.http.post(this.url,reqlv)
    .map((res:Response) => res.json());
   
  }
  

}
