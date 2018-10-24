import { Component, OnInit } from '@angular/core';
import  { LeaveHistoryService } from'../shared/leave-history.service'


@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
leaveData=[];
xdata;
list
  constructor(public leavehistory:LeaveHistoryService) { }

 
  getlist(){
    this.leavehistory.getLeaveHistory().subscribe(data => this.list = data);
  }
  // getlist(){
  //   this.leavehistory.getdetails().subscribe(data=> this.list = date);
  // }
 
  ngOnInit() {
      this.leavehistory.getLeaveHistory().subscribe(data => this.leaveData = data);

  }

}
