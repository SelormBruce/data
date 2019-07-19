import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-executive-login',
  templateUrl: './executive-login.component.html',
  styleUrls: ['./executive-login.component.css']
})
export class ExecutiveLoginComponent implements OnInit {
  ImgUrl="assets/images/logo.png";
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  loginl(form:NgForm){
this.authService.loginict({
  email: form.value.email,
  password: form.value.password
});
 
  }
 
}
