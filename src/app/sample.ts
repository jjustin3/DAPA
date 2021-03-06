//
// Options and Data definitions
//
import 'd3';
import 'nvd3';
declare let d3, nv: any;

export const ChartTypes = [
  'lineChart',
  'discreteBarChart',
  'pieChart',
  'scatterChart',
  'multiBarChart',
  'candlestickBarChart',
  'ohlcBarChart',
  'boxPlotChart',
  'donutChart',
  'multiBarHorizontalChart',
  'linePlusBarWithFocusChart',
  'forceDirectedGraph'
];

const color = d3.scale.category20()

export const AllOptions = {
  lineChart: {
    chart: {
      type: 'lineChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      valueFormat: function(d){
        return d3.format(',.2f')(d);
      },
      useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e){ console.log("stateChange"); },
        changeState: function(e){ console.log("changeState"); },
        tooltipShow: function(e){ console.log("tooltipShow"); },
        tooltipHide: function(e){ console.log("tooltipHide"); }
      },
      duration: 1000,
      xAxis: {
        axisLabel: '# Days'
      },
      yAxis: {
        axisLabel: 'Return (%)',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
      callback: function(chart){

      }
    }
  },
  discreteBarChart: {
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
        return '$' + d3.format(',.2f')(d);
      },
      duration: 1000,
      xAxis: {
        axisLabel: 'Month'
      },
      yAxis: {
        axisLabel: 'Amount ($)',
        axisLabelDistance: -10
      }
    }
  },
  pieChart: {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      valueFormat: function(d){
        return d3.format(',f')(d) + '%';
      },
      showLabels: false,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      duration: 1000,
      legend: {
        margin: {
          top: 5,
          right: 0,
          bottom: 5,
          left: 0
        }
      }
    }
  },
  scatterChart: {
    chart: {
      type: 'scatterChart',
      height: 450,
      color: d3.scale.category10().range(),
      scatter: {
        onlyCircles: false
      },
      showDistX: true,
      showDistY: true,
      duration: 350,
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -5
      }
    }
  },
  multiBarChart: {
    chart: {
      type: 'multiBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 45,
        left: 60
      },
      clipEdge: true,
      //staggerLabels: true,
      valueFormat: function(d){
        return '$' + d3.format(',.2f')(d);
      },
      duration: 1000,
      stacked: true,
      xAxis: {
        axisLabel: '# Days',
        showMaxMin: true,
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Amount ($)',
        axisLabelDistance: 0,
        tickFormat: function(d){
          return d3.format(',.2f')(d);
        }
      }
    }
  },
  candlestickBarChart: {
    chart:{
      type: 'candlestickBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: function(d){ return d['date']; },
      y: function(d){ return d['close']; },
      duration: 100,
      xAxis: {
        axisLabel: 'Dates',
        tickFormat: function(d) {
          return d3.time.format('%x')(+new Date(+new Date() - (20000 * 86400000) + (d * 86400000)));
        },
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Stock Price',
        tickFormat: function(d){
          return '$' + d3.format(',.1f')(d);
        },
        showMaxMin: false
      }
    }
  },
  ohlcBarChart: {
    chart: {
      type: 'ohlcBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: function(d){ return d['date']; },
      y: function(d){ return d['close']; },
      duration: 100,
      xAxis: {
        axisLabel: 'Dates',
        tickFormat: function(d) {
          return d3.time.format('%x')(+new Date(+new Date() - (20000 * 86400000) + (d * 86400000)));
        },
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Stock Price',
        tickFormat: function(d){
          return '$' + d3.format(',.1f')(d);
        },
        showMaxMin: false
      }
    }
  },
  boxPlotChart: {
    chart: {
      type: 'boxPlotChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      },
      color:['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
      x: function(d){return d.label;},
      //y: function(d){return d.values.Q3;},
      maxBoxWidth: 55,
      yDomain: [0, 500]
    }
  },
  donutChart: {
    chart: {
      type: 'pieChart',
      height: 450,
      donut: true,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: true,
      pie: {
        startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
        endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
      },
      duration: 500,
      legend: {
        margin: {
          top: 5,
          right: 140,
          bottom: 5,
          left: 0
        }
      }
    }
  },
  multiBarHorizontalChart: {
    chart: {
      type: 'multiBarHorizontalChart',
      height: 450,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: true,
      showValues: true,
      duration: 500,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function(d){
          return d3.format(',.2f')(d);
        }
      }
    }
  },
  linePlusBarWithFocusChart: {
    chart: {
      type: 'linePlusBarChart',
      height: 500,
      margin: {
        top: 30,
        right: 75,
        bottom: 50,
        left: 75
      },
      bars: {
        forceY: [0]
      },
      bars2: {
        forceY: [0]
      },
      color: ['#2ca02c', 'darkred'],
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d));
        }
      },
      x2Axis: {
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d));
        },
        showMaxMin: false
      },
      y1Axis: {
        axisLabel: 'Y1 Axis',
        tickFormat: function(d){
          return d3.format(',f')(d);
        },
        axisLabelDistance: 12
      },
      y2Axis: {
        axisLabel: 'Y2 Axis',
        tickFormat: function(d) {
          return '$' + d3.format(',.2f')(d)
        }
      },
      y3Axis: {
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      y4Axis: {
        tickFormat: function(d) {
          return '$' + d3.format(',.2f')(d)
        }
      }
    }
  },
  forceDirectedGraph: {
    chart: {
      type: 'forceDirectedGraph',
      height: 500,
      width: (function(){ return nv.utils.windowSize().width })(),
      margin:{top: 20, right: 20, bottom: 20, left: 20},
      color: function(d){
        return color(d.group)
      },
      nodeExtras: function(node) {
        node && node
          .append("text")
          .attr("dx", 8)
          .attr("dy", ".35em")
          .text(function(d) { return d.name })
          .style('font-size', '10px');
      }
    }
  }
}

export const AllData = {
  lineChart: sinAndCos(),
  discreteBarChart: [
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
  ],
  pieChart: [
    {
      key: "Bitcoin (BTC)",
      y: 60
    },
    {
      key: "Ethereum (ETH)",
      y: 30
    },
    {
      key: "Litecoin (LTC)",
      y: 10
    }
  ],
  scatterChart: generateDataScatter(4,40),
  multiBarChart: generateDataMultiBar(),
  candlestickBarChart: [{values: [
    {"date": 15854, "open": 165.42, "high": 165.8, "low": 164.34, "close": 165.22, "volume": 160363400, "adjusted": 164.35},
    {"date": 15855, "open": 165.35, "high": 166.59, "low": 165.22, "close": 165.83, "volume": 107793800, "adjusted": 164.96},
    {"date": 15856, "open": 165.37, "high": 166.31, "low": 163.13, "close": 163.45, "volume": 176850100, "adjusted": 162.59},
    {"date": 15859, "open": 163.83, "high": 164.46, "low": 162.66, "close": 164.35, "volume": 168390700, "adjusted": 163.48},
    {"date": 15860, "open": 164.44, "high": 165.1, "low": 162.73, "close": 163.56, "volume": 157631500, "adjusted": 162.7},
    {"date": 15861, "open": 163.09, "high": 163.42, "low": 161.13, "close": 161.27, "volume": 211737800, "adjusted": 160.42},
    {"date": 15862, "open": 161.2, "high": 162.74, "low": 160.25, "close": 162.73, "volume": 200225500, "adjusted": 161.87},
    {"date": 15863, "open": 163.85, "high": 164.95, "low": 163.14, "close": 164.8, "volume": 188337800, "adjusted": 163.93},
    {"date": 15866, "open": 165.31, "high": 165.4, "low": 164.37, "close": 164.8, "volume": 105667100, "adjusted": 163.93},
    {"date": 15867, "open": 163.3, "high": 164.54, "low": 162.74, "close": 163.1, "volume": 159505400, "adjusted": 162.24},
    {"date": 15868, "open": 164.22, "high": 164.39, "low": 161.6, "close": 161.75, "volume": 177361500, "adjusted": 160.9},
    {"date": 15869, "open": 161.66, "high": 164.5, "low": 161.3, "close": 164.21, "volume": 163587800, "adjusted": 163.35},
    {"date": 15870, "open": 164.03, "high": 164.67, "low": 162.91, "close": 163.18, "volume": 141197500, "adjusted": 162.32},
    {"date": 15873, "open": 164.29, "high": 165.22, "low": 163.22, "close": 164.44, "volume": 136295600, "adjusted": 163.57},
    {"date": 15874, "open": 164.53, "high": 165.99, "low": 164.52, "close": 165.74, "volume": 114695600, "adjusted": 164.87},
    {"date": 15875, "open": 165.6, "high": 165.89, "low": 163.38, "close": 163.45, "volume": 206149500, "adjusted": 162.59},
    {"date": 15876, "open": 161.86, "high": 163.47, "low": 158.98, "close": 159.4, "volume": 321255900, "adjusted": 158.56},
    {"date": 15877, "open": 159.64, "high": 159.76, "low": 157.47, "close": 159.07, "volume": 271956800, "adjusted": 159.07},
    {"date": 15880, "open": 157.41, "high": 158.43, "low": 155.73, "close": 157.06, "volume": 222329000, "adjusted": 157.06},
    {"date": 15881, "open": 158.48, "high": 160.1, "low": 157.42, "close": 158.57, "volume": 162262200, "adjusted": 158.57},
    {"date": 15882, "open": 159.87, "high": 160.5, "low": 159.25, "close": 160.14, "volume": 134848000, "adjusted": 160.14},
    {"date": 15883, "open": 161.1, "high": 161.82, "low": 160.95, "close": 161.08, "volume": 129483700, "adjusted": 161.08},
    {"date": 15884, "open": 160.63, "high": 161.4, "low": 159.86, "close": 160.42, "volume": 160402900, "adjusted": 160.42},
    {"date": 15887, "open": 161.26, "high": 162.48, "low": 161.08, "close": 161.36, "volume": 131954800, "adjusted": 161.36}
  ]}],
  ohlcBarChart: [{values: [
    {"date": 15707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, "volume": 192059000, "adjusted": 144.65},
    {"date": 15708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73, "volume": 144761800, "adjusted": 144.32},
    {"date": 15709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37, "volume": 116817700, "adjusted": 144.95},
    {"date": 15712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97, "volume": 110002500, "adjusted": 144.56},
    {"date": 15713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55, "volume": 121265100, "adjusted": 144.14},
    {"date": 15714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92, "volume": 90745600, "adjusted": 144.51},
    {"date": 15715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08, "volume": 130735400, "adjusted": 145.66},
    {"date": 15716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07, "volume": 113917300, "adjusted": 145.65},
    {"date": 15719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97, "volume": 89567200, "adjusted": 145.55},
    {"date": 15720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07, "volume": 93172600, "adjusted": 145.65},
    {"date": 15721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05, "volume": 104849500, "adjusted": 145.63},
    {"date": 15722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148, "volume": 133833500, "adjusted": 146.57},
    {"date": 15723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33, "volume": 169906000, "adjusted": 146.9},
    {"date": 15727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.13, "volume": 111797300, "adjusted": 147.69},
    {"date": 15728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37, "volume": 104596100, "adjusted": 147.93},
    {"date": 15729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41, "volume": 146426400, "adjusted": 147.97},
    {"date": 15730, "open": 149.88, "high": 150.25, "low": 149.37, "close": 150.25, "volume": 147211600, "adjusted": 148.8},
    {"date": 15733, "open": 150.29, "high": 150.33, "low": 149.51, "close": 150.07, "volume": 113357700, "adjusted": 148.62},
    {"date": 15734, "open": 149.77, "high": 150.85, "low": 149.67, "close": 150.66, "volume": 105694400, "adjusted": 149.2},
    {"date": 15735, "open": 150.64, "high": 150.94, "low": 149.93, "close": 150.07, "volume": 137447700, "adjusted": 148.62},
    {"date": 15736, "open": 149.89, "high": 150.38, "low": 149.6, "close": 149.7, "volume": 108975800, "adjusted": 148.25},
    {"date": 15737, "open": 150.65, "high": 151.42, "low": 150.39, "close": 151.24, "volume": 131173000, "adjusted": 149.78},
    {"date": 15740, "open": 150.32, "high": 151.27, "low": 149.43, "close": 149.54, "volume": 159073600, "adjusted": 148.09},
    {"date": 15741, "open": 150.35, "high": 151.48, "low": 150.29, "close": 151.05, "volume": 113912400, "adjusted": 149.59}
  ]}],
  boxPlotChart: [
    {
      label: "Sample A",
      values: {
        Q1: 180,
        Q2: 200,
        Q3: 250,
        whisker_low: 115,
        whisker_high: 400,
        outliers: [50, 100, 425]
      }
    },
    {
      label: "Sample B",
      values: {
        Q1: 300,
        Q2: 350,
        Q3: 400,
        whisker_low: 225,
        whisker_high: 425,
        outliers: [175, 450, 480]
      }
    },
    {
      label: "Sample C",
      values: {
        Q1: 100,
        Q2: 200,
        Q3: 300,
        whisker_low: 25,
        whisker_high: 400,
        outliers: [450, 475]
      }
    }
  ],
  donutChart: [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ],
  multiBarHorizontalChart: [
    {
      "key": "Series1",
      "color": "#d62728",
      "values": [
        {
          "label" : "Group A" ,
          "value" : -1.8746444827653
        } ,
        {
          "label" : "Group B" ,
          "value" : -8.0961543492239
        } ,
        {
          "label" : "Group C" ,
          "value" : -0.57072943117674
        } ,
        {
          "label" : "Group D" ,
          "value" : -2.4174010336624
        }
      ]
    },
    {
      "key": "Series2",
      "color": "#1f77b4",
      "values": [
        {
          "label" : "Group A" ,
          "value" : 25.307646510375
        } ,
        {
          "label" : "Group B" ,
          "value" : 16.756779544553
        } ,
        {
          "label" : "Group C" ,
          "value" : 18.451534877007
        } ,
        {
          "label" : "Group D" ,
          "value" : 8.6142352811805
        }
      ]
    }
  ]
}


// utils
function sinAndCos() {
  var sin = [],sin2 = [],
    cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Bitcoin (BTC)', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Ethereum (ETH)',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Litecoin (LTC)',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}
function generateDataScatter(groups, points) {
  var data = [],
    shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
    random = d3.random.normal();

  for (var i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (var j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
        , y: random()
        , size: Math.random()
        , shape: shapes[j % 6]
      });
    }
  }
  return data;
}

// MultiBarChart
/* Random Data Generator (took from nvd3.org) */
function generateDataMultiBar() {
  var coins = ['Litecoin (LTC)', 'Ethereum (ETH)', 'Bitcoin (BTC)'];
  return stream_layers(3,100,.1).map(function(data, i) {
    return {
      key: coins[i],
      values: data
    };
  });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.3 + Math.random()),
      y = 2 * Math.random() - .5,
      z = 10 / (.3 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
    var a = [], i;
    for (i = 0; i < m; i++) a[i] = (o + o * Math.random()) + Math.random() * 120;
    for (i = 0; i < 5; i++) bump(a);
    return a.map(stream_index);
  });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}
