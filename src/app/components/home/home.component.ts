import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  articles: any;
  countArticle: number;
  countCategory: number;
  sub: Subscription;
  userCheck;
  constructor(private db: AngularFirestore, private auth: AuthService) { 

    this.db.collection("/category").valueChanges().subscribe(cat => {
      this.countCategory = cat.length;
    });

    this.auth.userCheck$.subscribe(user => {
      this.userCheck = user;
    })
  }

  ngOnInit() {
    this.sub = this.db.collection("/articles").snapshotChanges().subscribe(art => {
      this.articles = art;
      this.countArticle = this.articles.length;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
