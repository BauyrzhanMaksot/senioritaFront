import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ClientRequestComponent} from './client-request/client-request.component';
import {DriverOfferComponent} from './driver-offer/driver-offer.component';
import {DriverGuard} from './guard/driver.guard';
import {ClientGuard} from './guard/client.guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

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
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
