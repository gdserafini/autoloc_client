import { Component } from '@angular/core';
import { RentalServiceService } from '../service/rental-service.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CarModel } from '../../cars/model/car-model';
import { RentalModel } from '../model/rental-model';

@Component({
  selector: 'app-list-cars-rental',
  templateUrl: './list-cars-rental.component.html',
  styleUrl: './list-cars-rental.component.css'
})
export class ListCarsRentalComponent {
  public carsList: any;
  public rentalsList: any;

  constructor(
    private service: RentalServiceService,
    private router: Router
  ){}

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
        this.carsList = cars;
      });
  }

  rentCar(code: string) {
    this.router.navigate(['/rent/' + code]);
  }
}
