import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: any;
  userCheck;
  Aname = '';
  AContent = '';
  ACategory = '';
  AImage = '';
  ADate = '';

  constructor(private db: AngularFirestore, private authServ: AuthService, private route: Router) { }

  ngOnInit() {
    this.getCategory().subscribe(cat => {
      this.categories = cat;
    });

    this.authServ.userCheck$.subscribe(user => {
      this.userCheck = user;
    });
  }

  public getCategory() {
    return this.db.collection("/category").snapshotChanges(); 
  }

  saveArticle(article: any) {
    this.db.collection("/articles").add(article);
    this.route.navigate(['/home']);
  }

}
