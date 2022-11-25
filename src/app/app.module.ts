import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {HttpClientModule} from '@angular/common/http'
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [			
    AppComponent,
      ValueComponent,
      AnimalComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
