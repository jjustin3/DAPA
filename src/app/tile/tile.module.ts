import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
window['d3'] = d3;
import 'nvd3';

import { TileComponent } from './tile.component';

@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    ChartsModule,
    NvD3Module
  ],
  exports: [
    TileComponent
  ],
  providers: [],
  bootstrap: []
})
export class TileModule { }
