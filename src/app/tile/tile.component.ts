import { Component, OnInit } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  constructor() { }

  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Month'
        },
        yAxis: {
          axisLabel: 'Amount ($)',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "January" ,
            "value" : 100
          } ,
          {
            "label" : "February" ,
            "value" : 400
          } ,
          {
            "label" : "March" ,
            "value" : 300
          } ,
          {
            "label" : "April" ,
            "value" : 350
          } ,
          {
            "label" : "May" ,
            "value" : 250
          } ,
          {
            "label" : "June" ,
            "value" : 600
          } ,
          {
            "label" : "July" ,
            "value" : 150
          } ,
          {
            "label" : "August" ,
            "value" : 90
          }
        ]
      }
    ];
  }

}
