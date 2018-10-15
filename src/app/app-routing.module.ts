import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ClientRequestComponent} from './client-request/client-request.component';
import {DriverOfferComponent} from './driver-offer/driver-offer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'client-request',
    component: ClientRequestComponent
  }, {
    path: 'driver-offer',
    component: DriverOfferComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
