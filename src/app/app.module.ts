import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Form, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AppService} from './app.service';
import {AuthorizeInterceptor} from './authorize.interceptor';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'angular2-cookie/core';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './register.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [LoginService,
              AppService,
              CookieService,
              RegisterService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthorizeInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
