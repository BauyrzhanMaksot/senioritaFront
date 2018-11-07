import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {ClientRequestComponent} from './client-request/client-request.component';
import {ClDashboardComponent} from './cl-dashboard/cl-dashboard.component';
import {ClUserProfileComponent} from './cl-user-profile/cl-user-profile.component';
import {ClTableListComponent} from './cl-table-list/cl-table-list.component';
import {ClHistoryComponent} from './cl-history/cl-history.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
