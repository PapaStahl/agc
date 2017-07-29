import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroSearchComponent } from './hero/hero-search.component';

import { HeroService } from './hero/hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, DashboardComponent, HeroListComponent, HeroDetailComponent, HeroSearchComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
