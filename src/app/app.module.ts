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
import { CarsListComponent } from './cars-list/cars-list.component';
import { AboutComponent } from './about/about.component';
import { AccountFormsComponent } from './account-forms/account-forms.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { ReadCarComponent } from './cars/read-car/read-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { firebase } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { ReadUserComponent } from './users/read-user/read-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { CreateStoreComponent } from './stores/create-store/create-store.component';
import { DeleteStoreComponent } from './stores/delete-store/delete-store.component';
import { ReadStoreComponent } from './stores/read-store/read-store.component';
import { UpdateStoreComponent } from './stores/update-store/update-store.component';

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
    DeleteCarComponent,
    CreateUserComponent,
    DeleteUserComponent,
    ReadUserComponent,
    UpdateUserComponent,
    CreateStoreComponent,
    DeleteStoreComponent,
    ReadStoreComponent,
    UpdateStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
