import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
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
