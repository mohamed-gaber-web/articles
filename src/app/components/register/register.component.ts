import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ: AuthService, private route: Router, private db: AngularFirestore) { }

  email: string;
  password: string;
  error: string;
  ngOnInit() {
  }

  signOut() {
    this.authServ.createNewUser(this.email, this.password).then(user => {
      this.route.navigate(['/login']);
    }).catch(err => {
      this.error = err;
    })
    
  }

}
