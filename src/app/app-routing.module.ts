import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {DriverGuard} from './guard/driver.guard';
import {ClientGuard} from './guard/client.guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {LoginGuard} from './guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'client',
    canActivate: [ClientGuard],
    loadChildren: './client/client.module#ClientModule'
  },
  {
    path: 'driver',
    canActivate: [DriverGuard],
    loadChildren: './driver/driver.module#DriverModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
