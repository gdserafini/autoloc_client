import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RentComponent } from './rent/rent.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AboutComponent } from './about/about.component';
import { AccountFormsComponent } from './account-forms/account-forms.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { ReadCarComponent } from './cars/read-car/read-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RentComponent,
    UserComponent,
    LayoutComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CarsListComponent,
    AboutComponent,
    AccountFormsComponent,
    AccountComponent,
    CreateCarComponent,
    ReadCarComponent,
    UpdateCarComponent,
    DeleteCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
