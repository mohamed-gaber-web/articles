import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  User;

  constructor(private authServ: AuthService, private route: Router) {
    this.authServ.userCheck$.subscribe(user => {
      this.User = user;
    })
   }

  ngOnInit() {
  }

  signOut() {
    this.authServ.signOut();
    this.route.navigate(['/login']);
  }

  getUsername() {
    this.username = localStorage.getItem('username');
  }
}
