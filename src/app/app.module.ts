import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AppService} from './app.service';
import {AuthorizeInterceptor} from './authorize.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './services/register.service';
import { HomeComponent } from './home/home.component';
import {OrderService} from './services/order.service';
import {DriverGuard} from './guard/driver.guard';
import {CurrentUser} from './model/current-user';
import {ClientGuard} from './guard/client.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {StreetService} from './services/street.service';
import { SearchFilterPipe } from './client/pipe/search-filter.pipe';
import { LetterBoldPipe } from './client/pipe/letter-bold.pipe';
import { DropdownDirective } from './dropdown.directive';
import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForbiddenComponent,
    DropdownDirective
  ],
  imports: [
    BrowserAnimationsModule,
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
    MatFormFieldModule,
    ComponentsModule
  ],
  providers: [LoginService,
              AppService,
              RegisterService,
              OrderService,
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
