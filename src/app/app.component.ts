import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  options1 = {
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
  data1 = [
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

  options2 = {
    chart: {
      type: 'pieChart',
      height: 450,
      donut: true,
      showLabels: true,
      x: function(d){return d.key;},
      y: function(d){return d.value;},
      pie: {
        startAngle: function(d) { return d.startAngle/2 - Math.PI/2 },
        endAngle: function(d) { return d.endAngle/2 - Math.PI/2 }
      },
      duration: 500,
      legend: {
        margin: {
          top: 5,
          right: 20,
          bottom: 5,
          left: 0
        }
      }
    }
  }
  data2 = {
    {
      key: "one",
      value:
    }
  }

  title = 'Digital Asset Portfolio Analyzer';
}
