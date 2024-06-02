import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {
  brand: FormControl = new FormControl(
    '', [Validators.required]);
  model: FormControl = new FormControl(
    '', [Validators.required]);
  color: FormControl = new FormControl(
    '', [Validators.required]);
  year: FormControl = new FormControl(
    '', [
      Validators.required, 
      Validators.min(1900),
      Validators.pattern('[0-9]{4}')
  ]);
  mileage: FormControl = new FormControl(
    '', [
      Validators.required, 
      Validators.min(0),
      Validators.pattern('[0-9]{9999999}')
  ]);

  constructor(){}

  ngOnInit(): void {}

  save(): void {
    if(this.model.invalid || this.year.invalid ||
      this.brand.invalid || this.mileage.invalid ||
      this.color.invalid){
        console.log('Dados inválidos');
        return;
    }
    console.log('Carro salvo');
  }
}
