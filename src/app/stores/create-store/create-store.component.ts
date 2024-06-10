import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StoreServiceService } from '../service/store-service.service';
import { StoreModel } from '../model/store-model';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent {
  name: FormControl = new FormControl(
    '', [Validators.required]);
  cnpj: FormControl = new FormControl(
    '', [Validators.required, Validators.pattern('[0-9]{14}')]);
  address: FormControl = new FormControl(
    '', [Validators.required]);

  constructor(private service: StoreServiceService){}

  ngOnInit(){}

  save(): void{
    if(this.name.invalid || this.cnpj.invalid ||
      this.address.invalid){
        console.log('Dados inválidos');
        return;
    }
    const store = new StoreModel();
    store.name = this.name.value;
    store.cnpj = this.cnpj.value;
    store.address = this.address.value;
    this.service.saveStore(store);
  }
}
