import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { SingleCartComponent } from './cart/single-cart/single-cart.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AuthGuard } from './service/auth.guard';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: HomeComponent
      },
      { path: 'home', component: HomeComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'cart', component: CartComponent },
      { path: 'single-cart/:id', component: SingleCartComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'view-user/:id', component: ViewUserComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
