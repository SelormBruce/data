import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ImgUrl="assets/images/logo.png";
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  loginl(form:NgForm){
this.authService.loginadmin({
  email: form.value.email,
  password: form.value.password
});
 
  }

}
