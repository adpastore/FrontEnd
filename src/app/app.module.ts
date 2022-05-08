import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import {HeaderComponent} from './component/header/header.component';
import { RedessComponent } from './component/redess/redess.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    HeaderComponent,
    RedessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
