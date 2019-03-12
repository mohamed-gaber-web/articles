import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  category: any[];
  userCheck;
  category_name: string = "";

  constructor(private db: AngularFirestore, private authServe: AuthService) {

    this.authServe.userCheck$.subscribe(user => {
      this.userCheck = user;
    });

    this.getCategory().subscribe(cat => {
      this.category = cat;
      this.category_name = "";
    });
   }

  addCat(category: any) {
    this.db.collection("/category").add(category);
  }

  public getCategory() {
    return this.db.collection("/category").snapshotChanges(); 
  }

  public delete(id: string) {
    this.db.doc("/category/" + id).delete();
  }
}
