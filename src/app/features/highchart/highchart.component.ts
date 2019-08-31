import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.scss']
})
export class HighchartComponent implements OnInit {
  
  public options: any =    {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['maths', 'computer', 'physics', 'Bio', 'Chemistry']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'marks'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
      name: 'John',
      data: [50, 30, 40, 70, 20]
      
  }, {
      name: 'Joe',
      data: [30, 40, 40, 20, 50]
      
  }, {
      name: 'Jane',
      data: [20, 50, 60, 20, 10]
      
  }, {
      name: 'Janet',
      data: [3, 50, 40, 40, 30]
      
  }]
};
  public options2: any =  {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Stacked column chart, grouped by gender'
    },

    xAxis: {
        categories: ['maths', 'computer', 'physics', 'Bio', 'Chemistry']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'marks'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'John',
        data: [50, 30, 40, 70, 20],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [30, 40, 40, 20, 50],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [20, 50, 60, 20, 10],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 50, 40, 40, 30],
        stack: 'female'
    }]
};

    colors = Highcharts.getOptions().colors;
    categories = [
        'Chrome',
        'Firefox',
        'Internet Explorer',
        'Safari',
        'Edge',
        'Opera',
        'Other'
    ];
    data = [
        {
            y: 62.74,
            color: this.colors[2],
            drilldown: {
                name: 'Chrome',
                categories: [
                    'Chrome v65.0',
                    'Chrome v64.0',
                    'Chrome v63.0',
                    'Chrome v62.0',
                    'Chrome v61.0',
                    'Chrome v60.0',
                    'Chrome v59.0',
                    'Chrome v58.0',
                    'Chrome v57.0',
                    'Chrome v56.0',
                    'Chrome v55.0',
                    'Chrome v54.0',
                    'Chrome v51.0',
                    'Chrome v49.0',
                    'Chrome v48.0',
                    'Chrome v47.0',
                    'Chrome v43.0',
                    'Chrome v29.0'
                ],
                data: [
                    0.1,
                    1.3,
                    53.02,
                    1.4,
                    0.88,
                    0.56,
                    0.45,
                    0.49,
                    0.32,
                    0.29,
                    0.79,
                    0.18,
                    0.13,
                    2.16,
                    0.13,
                    0.11,
                    0.17,
                    0.26
                ]
            }
        },
        {
            y: 10.57,
            color: this.colors[1],
            drilldown: {
                name: 'Firefox',
                categories: [
                    'Firefox v58.0',
                    'Firefox v57.0',
                    'Firefox v56.0',
                    'Firefox v55.0',
                    'Firefox v54.0',
                    'Firefox v52.0',
                    'Firefox v51.0',
                    'Firefox v50.0',
                    'Firefox v48.0',
                    'Firefox v47.0'
                ],
                data: [
                    1.02,
                    7.36,
                    0.35,
                    0.11,
                    0.1,
                    0.95,
                    0.15,
                    0.1,
                    0.31,
                    0.12
                ]
            }
        },
        {
            y: 7.23,
            color: this.colors[0],
            drilldown: {
                name: 'Internet Explorer',
                categories: [
                    'Internet Explorer v11.0',
                    'Internet Explorer v10.0',
                    'Internet Explorer v9.0',
                    'Internet Explorer v8.0'
                ],
                data: [
                    6.2,
                    0.29,
                    0.27,
                    0.47
                ]
            }
        },
        {
            y: 5.58,
            color: this.colors[3],
            drilldown: {
                name: 'Safari',
                categories: [
                    'Safari v11.0',
                    'Safari v10.1',
                    'Safari v10.0',
                    'Safari v9.1',
                    'Safari v9.0',
                    'Safari v5.1'
                ],
                data: [
                    3.39,
                    0.96,
                    0.36,
                    0.54,
                    0.13,
                    0.2
                ]
            }
        },
        {
            y: 4.02,
            color: this.colors[5],
            drilldown: {
                name: 'Edge',
                categories: [
                    'Edge v16',
                    'Edge v15',
                    'Edge v14',
                    'Edge v13'
                ],
                data: [
                    2.6,
                    0.92,
                    0.4,
                    0.1
                ]
            }
        },
        {
            y: 1.92,
            color: this.colors[4],
            drilldown: {
                name: 'Opera',
                categories: [
                    'Opera v50.0',
                    'Opera v49.0',
                    'Opera v12.1'
                ],
                data: [
                    0.96,
                    0.82,
                    0.14
                ]
            }
        },
        {
            y: 7.62,
            color: this.colors[6],
            drilldown: {
                name: 'Other',
                categories: [
                    'Other'
                ],
                data: [
                    7.62
                ]
            }
        }
    ];
    browserData = [];
    versionsData = [];
    

// Build the data arrays


// Create the chart
    optionDonut:any = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Browser market share, January, 2018'
    },
    subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: this.browserData,
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Versions',
        data: this.versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                }, {
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
};


  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
   
    Highcharts.chart('stackgroup', this.options2);
    let i;
    let j;
    let dataLen = this.data.length;
    let drillDataLen;
    let brightness;
    for (i = 0; i < dataLen; i += 1) {

      // add browser data
      this.browserData.push({
          name: this.categories[i],
          y: this.data[i].y,
          color: this.data[i].color
      });
  
      // add version data
      drillDataLen = this.data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - (j / drillDataLen) / 5;
          this.versionsData.push({
              name: this.data[i].drilldown.categories[j],
              y: this.data[i].drilldown.data[j],
              color: new Highcharts.Color(this.data[i].color).brighten(brightness).get()
          });
      }
  }
    Highcharts.chart('donut', this.optionDonut);
  }

}
