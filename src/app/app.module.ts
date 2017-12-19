import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TileModule } from './tile/tile.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
