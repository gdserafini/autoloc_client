import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  cpf: FormControl = new FormControl(
    '', [Validators.pattern('[0-9]{11}')]);
  phone: FormControl = new FormControl(
    '', [Validators.pattern('[0-9]{11}')]);
  password: FormControl = new FormControl('');

  constructor(
    private service: UserServiceService,
    private router: ActivatedRoute
  ){}

  ngOnInit(): void {}

  update(): void {
    if(this.cpf.invalid || this.phone.invalid){
        console.log('Dados inválidos');
        return;
    }
    const key = this.router.snapshot.params['code'];
    const dbUser = this.service.getUser(key);
    dbUser.subscribe((u: any) => {
      const user: UserModel = new UserModel();
      user.name = this.name.value ? this.name.value : u.name;
      user.email = this.email.value ? this.email.value : u.email;
      user.cpf = this.cpf.value ? this.cpf.value : u.cpf;
      user.phone = this.phone.value ? this.phone.value : u.phone;
      user.password = this.password.value ? this.password.value : u.password;
      this.service.update(key, user);
    });
  }
}
