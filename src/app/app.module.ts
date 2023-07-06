import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AnimalComponent } from './animal/animal.component';
import { NavComponent } from './Nav/Nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessegesComponent } from './messeges/messeges.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailsResolver } from './_resolver/member-details.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [									
    AppComponent,
      AnimalComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessegesComponent,
      MemberCardComponent,
      MemberDetailsComponent,
      MemberEditComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
    ,BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LightboxModule,
    CommonModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5010'],
        blacklistedRoutes: ['localhost:5010/auth']
      }
    })
  ],
  providers: [AuthService, ErrorInterceptor, MemberDetailsResolver, MemberListResolver, MemberEditResolver,PreventUnsavedChanges],
  bootstrap: [AppComponent]
})
export class AppModule { }
