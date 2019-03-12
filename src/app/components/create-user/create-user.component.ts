import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
admin: boolean = false;
  constructor(private db: AngularFirestore, private route: Router) { }

  ngOnInit() {
  }

createUser(form) {
  this.db.collection('/customers').add(form);
}

}
