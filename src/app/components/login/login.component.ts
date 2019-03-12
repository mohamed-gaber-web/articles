import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  error: string;
  constructor(private AuthServ: AuthService, private router: Router) { }

  signIn() {
    this.AuthServ.createAuthWithEmail(this.email, this.password)
      .then(() => {
       const userData = firebase.auth().currentUser; 
        let userRef = firebase.firestore().collection("users/").doc(userData.uid);
        userRef.set({ id: userData.uid, email: this.email })
      this.router.navigate(['/home']);
    })
      .catch(err => {
        this.error = err.message;
      })
  }



}
