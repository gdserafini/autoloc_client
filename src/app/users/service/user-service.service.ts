import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  dbUser?: any;

  constructor(private db: AngularFireDatabase) {}
  
  saveUser(user: UserModel){
    return this.db.list('users').push(user);
  }

  readAllUsers(){
    return this.db.list('users').snapshotChanges();
  }

  update(code: string, user: UserModel){
    return this.db.object('users/'+code).update(user);
  }

  delete(code: string){
    return this.db.object('users/'+code).remove();
  }

  getUser(code: string){
    return this.db.object('users/'+code).valueChanges();
  }
}
