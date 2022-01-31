import { HighContrastMode } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


 
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};  
  Highcharts = Highcharts;

  constructor() { }

  

  

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Service Levels Achieved'
      },
      subtitle: {
          text: '6 months average'
      },
      credits: {
        enabled: false,
      },
       exporting: {
         enabled: true, 
       },
       tooltip: {
        split: true,
        valueSuffix: ' millions'
        },
      series: [{
          name: 'Always Best',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Colmart',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Top',
          data: [163, 203, 276, 408, 547, 729, 628]
      },]
    };

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  
  }
}
