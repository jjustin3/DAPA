import { Component, OnInit, Input } from '@angular/core';

import { AllOptions, AllData } from '../sample';

declare let d3: any;

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() chartType: string;
  options: any;
  data: any;

  ngOnInit() {
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }

}
