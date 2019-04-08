import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AppService} from './app.service';
import {AuthorizeInterceptor} from './authorize.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './services/register.service';
import { HomeComponent } from './home/home.component';
import {DriverGuard} from './guard/driver.guard';
import {CurrentUser} from './model/current-user';
import {ClientGuard} from './guard/client.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {StreetService} from './services/street.service';
import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {LoginGuard} from './guard/login.guard';
import {NgSelectModule} from '@ng-select/ng-select';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForbiddenComponent,
    SearchPipe
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
    NgSelectModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [LoginService,
              AppService,
              RegisterService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthorizeInterceptor,
                multi: true
              },
              StreetService,
              DriverGuard,
              ClientGuard,
              LoginGuard,
              CurrentUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
