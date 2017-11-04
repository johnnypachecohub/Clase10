import { AuthApiService } from './seguridad/auth-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AppRouting } from './app-routing.module';
import { AutenticacionService } from 'app/seguridad/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [AutenticacionService, AuthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
