import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { RentComponent } from './rent/rent.component';
import { AboutComponent } from './about/about.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AccountFormsComponent } from './account-forms/account-forms.component';
import { AccountComponent } from './account/account.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { ReadCarComponent } from './cars/read-car/read-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';

const routes: Routes = [
  {path: "", component: LayoutComponent, 
  children: [
    {path: "", component: HomeComponent},
    {path: "signup", component: SignupComponent},
    {path: "login", component: LoginComponent},
    {path: "rent", component: RentComponent},
    {path: "about", component: AboutComponent},
    {path: "carsList", component: CarsListComponent},
    {path: "accountForm", component: AccountFormsComponent},
    {path: "account", component: AccountComponent},
    {path: "user", component: UserComponent},
    {path: "customer", component: CustomerComponent},
    {path: "create-car", component: CreateCarComponent},
    {path: "read-car", component: ReadCarComponent},
    {path: "update-car/:code", component: UpdateCarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
