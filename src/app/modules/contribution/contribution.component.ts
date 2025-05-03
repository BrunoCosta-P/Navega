import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RealPipe, PercentCustomPipe } from '../../shared/pipes/index.pipe';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexOptions,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

interface Contribution {
  percentage?: number;
  value: number;
  name: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    RealPipe,
    PercentCustomPipe,
    NgApexchartsModule,
  ],
})
export class ContributionComponent {
  contributions: Contribution[] = [
    { value: 2, name: 'home', percentage: 10 },
    { value: 3, name: 'list' },
    { value: 4, name: 'settings' },
    { value: 5, name: 'info' },
  ];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions; 

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        formatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      labels: [],
    };
  }

  ngOnInit(): void {
    this.updateChartData();
  }

  updateChartData(): void {
    this.chartOptions.series = this.contributions.map(
      (contribution) => contribution.value
    );
    this.chartOptions.labels = this.contributions.map(
      (contribution) => contribution.name
    );
  }
}
