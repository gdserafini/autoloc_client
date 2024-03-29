import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { CarComponent } from './car/car.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  {path: "layout", component: LayoutComponent, 
  children: [
    {path: "home", component: HomeComponent},
    {path: "signup", component: SignupComponent},
    {path: "login", component: LoginComponent},
    {path: "rent", component: RentComponent}
  ]},
  {path: "user", component: UserComponent},
  {path: "customer", component: CustomerComponent},
  {path: "car", component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
