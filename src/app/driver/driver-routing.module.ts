import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from './driver/driver.component';
import {MapsComponent} from './maps/maps.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HistoryComponent} from './history/history.component';
import {TableListComponent} from './table-list/table-list.component';
import {DrLongTermOfferComponent} from './dr-long-term-offer/dr-long-term-offer.component';
import {DrCurrentOffersComponent} from './dr-current-offers/dr-current-offers.component';
import {DrCurrentRequestsComponent} from './dr-current-requests/dr-current-requests.component';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'user-profile',
      component: UserProfileComponent
    },
    {
      path: 'table-list',
      component: TableListComponent
    },
    {
      path: 'history',
      component: HistoryComponent
    },
    {
      path: 'maps',
      component: MapsComponent
    },
      {
        path: 'long-term-offer',
        component: DrLongTermOfferComponent
      },
      {
        path: 'current-offers',
        component: DrCurrentOffersComponent
      },
      {
        path: 'current-requests',
        component: DrCurrentRequestsComponent
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
