import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import {HeaderComponent} from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { UsuarioComponent } from './component/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { FormsModule } from '@angular/forms';
import { PotenciasComponent } from './component/potencias/potencias.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    HeaderComponent,
    BannerComponent,
    UsuarioComponent,
    ExperienciaComponent,
    EducacionComponent,
    PotenciasComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
