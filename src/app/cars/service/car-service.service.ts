import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CarModel } from '../model/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  
  constructor(private db: AngularFireDatabase) {}
  
  saveCar(car: CarModel){
    return this.db.list('cars').push(car);
  }

  readCar(model: string){}

  listCars(){}

  update(model: string, data: CarModel){}

  delete(model: string){}
}
