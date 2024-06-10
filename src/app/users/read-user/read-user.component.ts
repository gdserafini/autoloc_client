import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrl: './read-user.component.css'
})
export class ReadUserComponent {
  public usersList: any;

  constructor(
    private service: UserServiceService,
    private router: Router
  ){}

  ngOnInit(): void { this.listUsers(); }

  listUsers(){
    return this.service.readAllUsers()
      .pipe(
        map(changes => {
          return changes.map(u => ({ key: u.key, 
            ...u.payload.val() as UserModel}));
        })
      )
      .subscribe(users => {
        this.usersList = users;
      });
  }

  updateUser(code: string){ 
    this.router.navigate(['/update-user/'+code]);
  }

  deleteUser(code: string){
    return this.service.delete(code);
  }
}
