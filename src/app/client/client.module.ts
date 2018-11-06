import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import {ClientRequestService} from './services/client-request.service';
import {ClientRequestComponent} from './client-request/client-request.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientComponent,
    ClientRequestComponent
  ],
  providers: [
    ClientRequestService
  ]
})
export class ClientModule { }
