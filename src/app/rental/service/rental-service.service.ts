import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { RentalModel } from '../model/rental-model';

@Injectable({
  providedIn: 'root'
})
export class RentalServiceService {

  constructor(private db: AngularFireDatabase) {}

  createRental(rental: RentalModel){
    return this.db.list('rentals').push(rental);
  }

  readAllCars(){
    return this.db.list('cars').snapshotChanges();
  }

  readAllRental(){
    return this.db.list('rentals').snapshotChanges();
  }
}
