import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RentalServiceService } from '../service/rental-service.service';
import { ActivatedRoute } from '@angular/router';
import { RentalModel } from '../model/rental-model';
import { Observable, map, take } from 'rxjs';
import { CarModel } from '../../cars/model/car-model';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  code?: string;
  public rentalsList: any;
  driver: FormControl = new FormControl(
    '', [Validators.required]);
  rentalStart: FormControl = new FormControl(
    '', [Validators.required]);
  rentalEnd: FormControl = new FormControl(
    '', [Validators.required]);
  baseCost = 500;

  constructor(
    private service: RentalServiceService,
    private router: ActivatedRoute
  ){}

  ngOnInit(){}

  calculateRentalCost(start: number, end: number){
    if(start === undefined || end === undefined) return 0;
    const days = Math.ceil(
      Math.abs(end - start)/(1000 * 60 * 60 * 24)
    );
    if(days == 0) return this.baseCost;
    else return days * this.baseCost;
  }

  rent(){
    const code = this.router.snapshot.params['code'];
    const rental = new RentalModel();
    rental.driver = this.driver.value;
    rental.start = (new Date(this.rentalStart.value)).getTime();
    rental.end = (new Date(this.rentalEnd.value)).getTime();
    rental.carId = code;
    if(this.invalidPeriod(rental.start, rental.end)){
      alert('Periodo de locação inválido.');
      return;
    }
    else{
    this.isLocated(code, rental.start, rental.end)
      .pipe(take(1))
      .subscribe(carLocated => {
        if(carLocated){
          alert('Carro já locado no período.');
        }
        else{
          alert('O valor da locação será de: R$ '+
            this.calculateRentalCost(
              rental.end? rental.end : 0, 
              rental.start? rental.start : 0) + ',00'
          );
          this.service.createRental(rental);
          alert('Carro locado.\nObrigado pela confiança!');
        }
      });
    }
    return;
  }

  invalidPeriod(start: number, end: number): boolean{
    return Math.abs(start) > Math.abs(end) ||
      start < Date.now() || end < Date.now();
  }

  isLocated(code: string, startDate: number, endDate: number): Observable<boolean> {
    return this.service.readAllRental().pipe(
      map(changes => {
        const rentals = changes.map(r => ({ 
          key: r.key, ...r.payload.val() as RentalModel 
        }));
        return rentals.some(rental =>
          rental.carId === code &&
          rental.start !== undefined && rental.end !== undefined &&
          !(endDate < rental.start || startDate > rental.end)
        );
      })
    );
  }
}
