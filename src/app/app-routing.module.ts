import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AccountFormsComponent } from './account-forms/account-forms.component';
import { AccountComponent } from './account/account.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { ReadCarComponent } from './cars/read-car/read-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { CreateStoreComponent } from './stores/create-store/create-store.component';
import { UpdateStoreComponent } from './stores/update-store/update-store.component';
import { ReadStoreComponent } from './stores/read-store/read-store.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ReadUserComponent } from './users/read-user/read-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { ListCarsRentalComponent } from './rental/list-cars-rental/list-cars-rental.component';
import { RentComponent } from './rental/rent/rent.component';

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
    {path: "update-car/:code", component: UpdateCarComponent},
    {path: "create-store", component: CreateStoreComponent},
    {path: "read-store", component: ReadStoreComponent},
    {path: "update-store/:code", component: UpdateStoreComponent},
    {path: "create-user", component: CreateUserComponent},
    {path: "read-user", component: ReadUserComponent},
    {path: "update-user/:code", component: UpdateUserComponent},
    {path: "rent-list", component: ListCarsRentalComponent},
    {path: "rent/:code", component: RentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
