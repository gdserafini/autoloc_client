import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../service/car-service.service';
import { CarModel } from '../model/car-model';
import { map } from 'rxjs';

@Component({
  selector: 'app-read-car',
  templateUrl: './read-car.component.html',
  styleUrl: './read-car.component.css'
})
export class ReadCarComponent implements OnInit{
  public carsList: any;

  constructor(private service: CarServiceService){}

  ngOnInit(): void { this.listCars(); }

  listCars(){
    return this.service.readAllCars()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.key, 
            ...c.payload.val() as CarModel}));
        })
      )
      .subscribe(cars => {
        console.log(cars);
        this.carsList = cars;
      });
  }

  updateCar(code: string){ 
    return this.service.update(code, new CarModel()); 
  }

  deleteCar(code: string){
    return this.service.delete(code);
  }
}