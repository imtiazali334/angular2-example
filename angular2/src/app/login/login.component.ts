import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onlogin(user_name,user_password){
    if(user_name=="admin" && user_password =="123456"){
  
      this.router.navigate(['/dashbord'])
    }else 
    this.msg="invalid email and password"
  
  
  }
  log(){
    this.router.navigate(['/dashbord'])
  }
  constructor(private router:Router) { }
user;
msg;
password;
  ngOnInit() {

    
}
 

}
