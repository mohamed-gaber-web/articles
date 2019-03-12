import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counts-app',
  templateUrl: './counts-app.component.html',
  styleUrls: ['./counts-app.component.css']
})
export class CountsAppComponent implements OnInit {

  user: any;
  @Input() CountArt: number;
  @Input() CountCat: number;
  constructor(private authServ: AuthService) {
    this.authServ.userCheck$.subscribe(user => {
      this.user = user;
    })
   }

  ngOnInit() {
  }

}
