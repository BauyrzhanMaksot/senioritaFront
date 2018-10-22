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
import { ClientRequestComponent } from './client-request/client-request.component';
import { DriverOfferComponent } from './driver-offer/driver-offer.component';
import {ClientRequestService} from './client-request.service';
import {DriverOfferService} from './driver-offer.service';
import {OrderService} from './order.service';
import {DriverService} from './driver.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClientRequestComponent,
    DriverOfferComponent
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
              ClientRequestService,
              DriverOfferService,
              OrderService,
              DriverService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthorizeInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
