import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CarComponent } from './car/car.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CarComponent,
    RentComponent,
    UserComponent,
    LayoutComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CarsListComponent,
    AboutComponent,
    AccountFormsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
