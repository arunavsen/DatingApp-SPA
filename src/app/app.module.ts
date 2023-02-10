import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {HttpClientModule} from '@angular/common/http'
import { AnimalComponent } from './animal/animal.component';
import { NavComponent } from './Nav/Nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [				
    AppComponent,
      ValueComponent,
      AnimalComponent,
      NavComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
