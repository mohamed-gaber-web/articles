import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  userCheck;
  articles: any;
  id: string;
  // email: string;
  constructor(
    private auth: AuthService, 
    private db: AngularFirestore, 
    private routeParam: ActivatedRoute) {
      
    this.id = this.routeParam.snapshot.paramMap.get('id');

    this.db.doc("/articles/" + this.id).valueChanges().pipe(take(1)).subscribe(art => {
      this.articles = art;
    });
   }

  ngOnInit() {
    this.auth.userCheck$.subscribe(user =>{
      this.userCheck = user;
      // this.email = user.email;
    });
  }

}
