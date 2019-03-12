import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userCheck;

  constructor(private auth: AuthService, private db: AngularFirestore) {
    this.auth.userCheck$.subscribe(user => {
      this.userCheck = user;
    })
   }

  ngOnInit() {}

}
