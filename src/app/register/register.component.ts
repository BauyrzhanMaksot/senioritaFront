import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  constructor(private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.formRegister = new FormGroup({
      'login': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'role': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'rePassword': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.userDto = new UserDto();
    this.userDto.login = this.formRegister.get('login').value;
    this.userDto.password = this.formRegister.get('password').value;
    this.userDto.email = this.formRegister.get('email').value;
    this.userDto.roleId = +this.formRegister.get('role').value;
    if (this.userDto.login == '' || this.userDto.password == '') {
      return null;
    }
    this.registerService.register(this.userDto).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }
}
