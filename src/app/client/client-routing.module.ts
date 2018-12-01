import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {ClientRequestComponent} from './client-request/client-request.component';
import {ClDashboardComponent} from './cl-dashboard/cl-dashboard.component';
import {ClUserProfileComponent} from './cl-user-profile/cl-user-profile.component';
import {ClTableListComponent} from './cl-table-list/cl-table-list.component';
import {ClHistoryComponent} from './cl-history/cl-history.component';
import {ClLongTermRequestComponent} from './cl-long-term-request/cl-long-term-request.component';
import {ClientImageUpdateComponent} from './client-image-update/client-image-update.component';
import {DriverInfoComponent} from './driver-info/driver-info.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'dashboard',
        component: ClDashboardComponent
      },
      {
        path: 'user-profile',
        component: ClUserProfileComponent
      },
      {
        path: 'table-list',
        component: ClTableListComponent
      },
      {
        path: 'history',
        component: ClHistoryComponent
      },
      {
        path: 'long-term-request',
        component: ClLongTermRequestComponent
      },
      {
        path: 'image-update',
        component: ClientImageUpdateComponent
      },
      {
        path: 'driver-info/:id',
        component: DriverInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
