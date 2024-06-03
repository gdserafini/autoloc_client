import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CarModel } from '../model/car-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  dbCar?: any;

  constructor(private db: AngularFireDatabase) {}
  
  saveCar(car: CarModel){
    return this.db.list('cars').push(car);
  }

  readAllCars(){
    return this.db.list('cars').snapshotChanges();
  }

  update(code: string, car: CarModel){
    return this.db.object('cars/'+code).update(car);
  }

  delete(code: string){
    return this.db.object('cars/'+code).remove();
  }

  getCar(code: string){
    return this.db.object('cars/'+code).valueChanges();
  }
}
