import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, data: {index: 0} },
  { path: 'customer', component: CustomersComponent, data: {index: 1} },
  { path: 'article', component: ProductsComponent, data: {index: 2} },
  { path: 'articleDetails/:id', component: ArticleDetailsComponent},
  { path: 'category', component: CategoryComponent, data: {index: 3} },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
   RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


