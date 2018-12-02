import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver/driver.component';
import {MapsComponent} from './maps/maps.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HistoryComponent} from './history/history.component';
import {TableListComponent} from './table-list/table-list.component';
import {ComponentsModule} from '../components/components.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTooltipModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DriverService} from './services/driver.service';
import {DriverOfferService} from './services/driver-offer.service';
import {DriverOfferComponent} from './driver-offer/driver-offer.component';
import {SearchFilterPipe} from '../client/pipe/search-filter.pipe';
import {LetterBoldPipe} from '../client/pipe/letter-bold.pipe';
import {OrderService} from 'app/driver/services/order.service';
import { DrLongTermOfferComponent } from './dr-long-term-offer/dr-long-term-offer.component';
import { DrCurrentOffersComponent } from './dr-current-offers/dr-current-offers.component';
import { DrCurrentRequestsComponent } from './dr-current-requests/dr-current-requests.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { DriverImageUpdateComponent } from './driver-image-update/driver-image-update.component';
import {DriverImageUpdateService} from './services/driver-image-update.service';
import {MatSelectModule} from '@angular/material/select';
import { DrEditRegularOfferComponent } from './dr-edit-regular-offer/dr-edit-regular-offer.component';
import { DrEditLongOfferComponent } from './dr-edit-long-offer/dr-edit-long-offer.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ToastModule} from 'ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    DriverRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    NgSelectModule,
    ToastModule.forRoot()
  ],
  declarations: [
    DriverComponent,
    DriverOfferComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    HistoryComponent,
    MapsComponent,
    SearchFilterPipe,
    LetterBoldPipe,
    DrLongTermOfferComponent,
    DrCurrentOffersComponent,
    DrCurrentRequestsComponent,
    ClientInfoComponent,
    DriverImageUpdateComponent,
    DrEditRegularOfferComponent,
    DrEditLongOfferComponent
  ],
  providers: [
    DriverService,
    OrderService,
    DriverOfferService,
    DriverImageUpdateService
  ]
})
export class DriverModule { }
