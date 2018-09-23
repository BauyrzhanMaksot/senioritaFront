import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formLogin: FormGroup;
  title = 'app';
  zhandos = 'zhandos is the best';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.formLogin);
    this.loginService.login(this.formLogin.get('login').value, this.formLogin.get('password').value);
  }
}
