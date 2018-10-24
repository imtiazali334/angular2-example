import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { ReqLeaveService } from '../shared/req-leave.service';


@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  data:any;
  postStatus:any;
  obj:any;

  constructor(public http:Http, public reqleave:ReqLeaveService ) { }
  
  postdata(reql){
    this.reqleave.postreqleave(reql).subscribe(res => this.postStatus = res, err=> console.log(err));
  
    // this.http.post('http://localhost:3000/reqleave', val).map((response:Response)=> this.data= response.json()).subscribe(res => this.postStatus = res, err=> console.log(err));

    console.log(reql)

  }
//  postdata(val){
//   //  this.reqleave.postreqleave();
//    console.log(val)
//  }
  ngOnInit() {
  }

}
