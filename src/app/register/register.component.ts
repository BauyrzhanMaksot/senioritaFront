import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../register.service';
import {UserDto} from '../userDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  userDto: UserDto;
  passwordMatchVal: boolean;
  organizationDomains = ['@nu.edu.kz'];

  constructor(private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.formRegister = new FormGroup({
      'login': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, this.emailConfirmation]),
      'role': new FormControl('', Validators.required),
      'password': new FormGroup(
        {
          'old': new FormControl('', [Validators.required, Validators.minLength(8)]),
          'new': new FormControl('', [Validators.required])
        }, this.passwordMatch
      )
    });
  }

  getPassword() {
    return this.formRegister.get('password');
  }

  getOldPassword() {
    return this.formRegister.get('password').get('old');
  }

  getEmail() {
    return this.formRegister.get('email');
  }
  onSubmit() {
    console.log(this.formRegister);
    this.userDto = new UserDto();
    this.userDto.login = this.formRegister.get('login').value;
    this.userDto.password = this.formRegister.get('password').get('old').value;
    this.userDto.email = this.formRegister.get('email').value;
    this.userDto.roleId = +this.formRegister.get('role').value;
    if (this.userDto.login == '' || this.userDto.password == '') {
      return null;
    }

    if (this.formRegister.invalid) {
        return;
    }
    this.registerService.register(this.userDto).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }

  passwordMatch(control: AbstractControl) {
    if (control.get('new').value.toString().length != control.get('old').value.toString().length) {
      return {'error': 'error'};
    }
    return null;
  }

  emailConfirmation(control: AbstractControl) {
    if (!control.value.toString().endsWith('@nu.edu.kz')) {
      return {'error': 'error'};
    }
    return null;
  }
}
