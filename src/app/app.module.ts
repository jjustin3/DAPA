import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NvD3Component } from 'ng2-nvd3';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NvD3Component
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
