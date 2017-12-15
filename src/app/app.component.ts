import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datasets1 = [
    {
      label: "Unrealized Gain ($)",
      data: [1000, 700, 300, 900, 400, 1000]
    },
    {
      label: "Increased Cost Basis ($)",
      data: [400, 500, 400, 100, 100, 700]
    }
  ];
  labels1 = ['January', 'February', 'March', 'April', 'May', 'June'];
  options1 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  datasets2 = [30, 22, 7];
  labels2 = ['Litecoin (LTC)', 'Bitcoin (BTC)', 'Ethereum (ETH)'];

  title = 'Digital Asset Portfolio Analyzer';
}
