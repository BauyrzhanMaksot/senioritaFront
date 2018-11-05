import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Form, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AppService} from './app.service';
import {AuthorizeInterceptor} from './authorize.interceptor';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'angular2-cookie/core';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './services/register.service';
import { HomeComponent } from './home/home.component';
import { ClientRequestComponent } from './client-request/client-request.component';
import { DriverOfferComponent } from './driver-offer/driver-offer.component';
import {ClientRequestService} from './services/client-request.service';
import {DriverOfferService} from './services/driver-offer.service';
import {OrderService} from './services/order.service';
import {DriverService} from './services/driver.service';
import {DriverGuard} from './guard/driver.guard';
import {CurrentUser} from './model/current-user';
import {ClientGuard} from './guard/client.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {StreetService} from './services/street.service';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { LetterBoldPipe } from './pipe/letter-bold.pipe';
import { DropdownDirective } from './dropdown.directive';
import { HistoryComponent } from './history/history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './maps/maps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClientRequestComponent,
    DriverOfferComponent,
    ForbiddenComponent,
    SearchFilterPipe,
    LetterBoldPipe,
    DropdownDirective,
    HistoryComponent,
    UserProfileComponent,
    TableListComponent,
    MapsComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  providers: [LoginService,
              AppService,
              CookieService,
              RegisterService,
              ClientRequestService,
              DriverOfferService,
              OrderService,
              DriverService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthorizeInterceptor,
                multi: true
              },
              StreetService,
              DriverGuard,
              ClientGuard,
              CurrentUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
