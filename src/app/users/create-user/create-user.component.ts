import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  name: FormControl = new FormControl(
    '', [Validators.required]);
  email: FormControl = new FormControl(
    '', [Validators.required]);
  cpf: FormControl = new FormControl(
    '', [
      Validators.required, Validators.pattern('[0-9]{11}')
    ]);
  phone: FormControl = new FormControl(
    '', [
      Validators.required, Validators.pattern('[0-9]{11}')
    ]);
  password: FormControl = new FormControl(
    '', [Validators.required]);

  constructor(private service: UserServiceService){}

  save(): void {
    if(this.name.invalid || this.email.invalid ||
      this.cpf.invalid || this.phone.invalid ||
      this.password.invalid){
        console.log('Dados inválidos');
        return;
    }
    const user = new UserModel();
    user.name = this.name.value;
    user.email = this.email.value;
    user.cpf = this.cpf.value;
    user.phone = this.phone.value;
    user.password = this.password.value;
    user.role = 'USER';
    this.service.saveUser(user);
  }
}
