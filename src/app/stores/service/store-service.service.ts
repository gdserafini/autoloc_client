import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { StoreModel } from '../model/store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  dbStore?: any;

  constructor(private db: AngularFireDatabase){}

  saveStore(store: StoreModel){
    return this.db.list('stores').push(store);
  }

  readAllStore(){
    return this.db.list('stores').snapshotChanges();
  }

  update(code: string, store: StoreModel){
    return this.db.object('stores/'+code).update(store);
  }

  delete(code: string){
    return this.db.object('stores/'+code).remove();
  }

  getCar(code: string){
    return this.db.object('stores/'+code).valueChanges();
  }
}
