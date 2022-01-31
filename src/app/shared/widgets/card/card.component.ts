import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input()
  label!: string;
  @Input() total!: string;
  @Input() percentage!: string;

  Highcharts = Highcharts;

  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
        chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height:140
      },
      title: { 
          text: null
      },
      subtitle: {
          text: null
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false, 
      },
      xAxis: {
        labels:{
          enabled:false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels:{
          enabled:false
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
        split: true,
        outside:true
        },
      series: [{
          data: [71, 78, 39, 66, 20, 20]
      },]
    }
    HC_exporting(this.Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  

}
