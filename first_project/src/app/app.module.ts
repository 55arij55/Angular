import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceModule } from './annonce/annonce/annonce.module';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './nav/menu/menu.component';
import { NavModule } from './nav/nav/nav.module';
import { FormResidenceComponent } from './form-residence/form-residence.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Home2Component,
    ResidenceComponent,
    NotfoundComponent,
    NavComponent,
    MenuComponent,
    FormResidenceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    NavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
