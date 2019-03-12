import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from "firebase";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCheck$: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.userCheck$ = auth.authState;
  }

  createAuthWithEmail(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.auth.signOut();
  }

  createNewUser(email: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }


}
