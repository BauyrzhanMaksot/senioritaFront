import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import {ClientRequestService} from './services/client-request.service';
import {ClientRequestComponent} from './client-request/client-request.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from '../components/components.module';
import {OrderService} from '../driver/services/order.service';
import { ClDashboardComponent } from './cl-dashboard/cl-dashboard.component';
import { ClUserProfileComponent } from './cl-user-profile/cl-user-profile.component';
import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule} from '@angular/material';
import { ClTableListComponent } from './cl-table-list/cl-table-list.component';
import { ClHistoryComponent } from './cl-history/cl-history.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    ClientComponent,
    ClientRequestComponent,
    ClDashboardComponent,
    ClUserProfileComponent,
    ClTableListComponent,
    ClHistoryComponent
  ],
  providers: [
    ClientRequestService,
    OrderService
  ]
})
export class ClientModule { }
