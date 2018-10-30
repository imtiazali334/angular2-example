import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { userInfo } from 'os';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  form:any;
  user:any;
  address:any;

  constructor() { }
  onsubmit(val){
  console.log(val);
}
  ngOnInit() {
  }

}
