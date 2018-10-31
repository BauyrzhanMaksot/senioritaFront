import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ClientRequestComponent} from './client-request/client-request.component';
import {DriverOfferComponent} from './driver-offer/driver-offer.component';
import {DriverGuard} from './driver.guard';
import {ClientGuard} from './client.guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';

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
    canActivate: [ClientGuard],
    component: ClientRequestComponent
  }, {
    path: 'driver-offer',
    canActivate: [DriverGuard],
    component: DriverOfferComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
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
