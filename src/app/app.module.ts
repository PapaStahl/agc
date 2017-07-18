import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component'
import { HeroListComponent } from './hero/hero-list.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, HeroListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
