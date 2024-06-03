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

  readAllCars(){
    return this.db.list('cars').snapshotChanges();
  }

  update(code: string, data: CarModel){
    console.log('Atualizado');
  }

  delete(code: string){
    return this.db.object('cars/'+code).remove();
  }
}
