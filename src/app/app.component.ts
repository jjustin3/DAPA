import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datasets = [
    {
      label: "Cost Basis",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];
  labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  title = 'Digital Asset Portfolio Analyzer';
}
