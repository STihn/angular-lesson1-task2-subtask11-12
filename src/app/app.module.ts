import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component
  ],
  imports: [
    BrowserModule,
    Mod1Module,
    Mod2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
