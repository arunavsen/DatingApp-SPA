import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AnimalComponent } from './animal/animal.component';
import { NavComponent } from './Nav/Nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_services/error.interceptor';

@NgModule({
  declarations: [						
    AppComponent,
      AnimalComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
    ,BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService, ErrorInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
