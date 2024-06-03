import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CarServiceService } from '../service/car-service.service';
import { CarModel } from '../model/car-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css'
})
export class UpdateCarComponent {
  code?: string;
  brand: FormControl = new FormControl('');
  model: FormControl = new FormControl('');
  color: FormControl = new FormControl('');
  year: FormControl = new FormControl(
    '', [
      Validators.min(1900),
      Validators.pattern('[0-9]{4}')
  ]);
  mileage: FormControl = new FormControl(
    '', [
      Validators.min(0),
      Validators.pattern('[0-9]{0,9999999}')
  ]);

  constructor(
    private service: CarServiceService,
    private router: ActivatedRoute
  ){}

  ngOnInit(): void {}

  update(): void {
    if(this.year.invalid || this.mileage.invalid){
        console.log('Dados inválidos');
        return;
    }
    const key = this.router.snapshot.params['code'];
    const dbCar = this.service.getCar(key);
    dbCar.subscribe((c: any) => {
      const car: CarModel = new CarModel();
      car.brand = this.brand.value ? this.brand.value : c.brand;
      car.mileage = this.mileage.value ? this.mileage.value : c.mileage;
      car.model = this.model.value ? this.model.value : c.model;
      car.year = this.year.value ? this.year.value : c.year;
      car.color = this.color.value ? this.color.value : c.color;
      this.service.update(key, car);
    });
  }
}
