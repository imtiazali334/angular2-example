import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { ReqLeaveService } from '../shared/req-leave.service';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  data:any;
  obj:any;
  reqleave 
  reset(){
    this.reqleave={
      id:null,
      name:'',
      resson:'',
      date:''
    }

  }

  constructor(public http:Http, public reqleave1:ReqLeaveService ) { }
  
  saveData(reqleave){
    this.reqleave1.postreqleave(reqleave).subscribe(res => this.data = res, err=>{console.log(err)});
  
    // this.http.post('http://localhost:3000/reqleave', val).map((response:Response)=> this.data= response.json()).subscribe(res => this.postStatus = res, err=> console.log(err));

    console.log(reqleave)
    this.reset();
    

  }



  ngOnInit() {

  this.reset()
  }

}
