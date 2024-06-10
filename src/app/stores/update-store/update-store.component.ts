import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StoreServiceService } from '../service/store-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreModel } from '../model/store-model';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrl: './update-store.component.css'
})
export class UpdateStoreComponent {
  code?: string;
  name: FormControl = new FormControl('');
  cnpj: FormControl = new FormControl('',
    [Validators.pattern('[0-9]{14}')]
  );
  address: FormControl = new FormControl('');

  constructor(
    private service: StoreServiceService,
    private router: ActivatedRoute
  ){}

  ngOnInit(): void {}

  update(): void{
    if(this.cnpj.invalid ){
      console.log('Dados inválidos');
      return;
    }
    const key = this.router.snapshot.params['code'];
    const dbStore = this.service.getStore(key);
    dbStore.subscribe((s: any) => {
      const store: StoreModel = new StoreModel();
      store.name = this.name.value ? this.name.value : s.name;
      store.cnpj = this.cnpj.value ? this.cnpj.value : s.cnpj;
      store.address = this.address.value ? this.address.value : s.address;
      this.service.update(key, store);
    })
  }
}
