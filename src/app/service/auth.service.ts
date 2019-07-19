import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Iauth } from '../iauth';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  subject = new Subject<boolean>();
  constructor(private afauth: AngularFireAuth, private router: Router) {
    this.afauth.authState.subscribe(user => {
      if (user) {
       this.user= user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }

      else {
        localStorage.setItem('user', null);
      }
    });
  }

  async loginict(authdata:Iauth) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password);
      this.isAuthict();
    } catch (error) {
      alert("Error!" + error.message);
    }

  }
  async loginadmin(authdata:Iauth) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password);
      this.isAuthso();
    } catch (error) {
      alert("Error!" + error.message);
    }

  }
  async loginsp(authdata:Iauth) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password);
      this.isAuthsp();
    } catch (error) {
      alert("Error!" + error.message);
    }

  }
  async logineo(authdata:Iauth) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password);
      this.isAutheo();
    } catch (error) {
      alert("Error!" + error.message);
    }

  }


  logout() {

  }
  isAuthict() {
    this.router.navigate(['/registratioin-dashboard']);
    return this.user != null;
  }
  isAuthsp() {
    this.router.navigate(['/executive-list']);
    return this.user != null;
  }

  isAuthso() {
    this.router.navigate(['/executive-list']);
    return this.user != null;
  }

  isAutheo() {
    this.router.navigate(['/estate-officer']);
    return this.user != null;
   /*  0558525823 */
  }


signup(email:string,password:string){
  this.afauth.auth.createUserWithEmailAndPassword(email,password);}

}
