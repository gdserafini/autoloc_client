import { Component } from '@angular/core';
import { StoreServiceService } from '../service/store-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { StoreModel } from '../model/store-model';

@Component({
  selector: 'app-read-store',
  templateUrl: './read-store.component.html',
  styleUrl: './read-store.component.css'
})
export class ReadStoreComponent {
  public storesList: any;

  constructor(
    private service: StoreServiceService,
    private router: Router
  ){}

  ngOnInit(): void{ this.listStores(); }
  
  listStores(){
    return this.service.readAllStores()
      .pipe(
        map(changes => {
          return changes.map(s => ({ key: s.key, 
            ...s.payload.val() as StoreModel}));
        })
      )
      .subscribe(stores => {
        this.storesList = stores;
      });
  }

  updateStore(code: string){ 
    this.router.navigate(['/update-store/'+code]);
  }

  deleteStore(code: string){
    return this.service.delete(code);
  }
}
