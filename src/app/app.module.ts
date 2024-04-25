import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { GetLocationsService } from './services/get-locations.service';
import { FeaturedCountryComponent } from './featured-country/featured-country.component';
import { ParallaxBackgroundComponent } from './parallax-background/parallax-background.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FeaturedCountryComponent,
    ParallaxBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GetLocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
