import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  ImgUrl="assets/images/logo.png";
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  loginl(form:NgForm){
this.authService.loginsp({
  email: form.value.email,
  password: form.value.password
});
 
  }
 
}
