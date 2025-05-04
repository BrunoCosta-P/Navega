import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RealPipe, PercentCustomPipe } from '../../shared/pipes/index.pipe';
import { ContributionService, Contribution } from '../../shared/services/contribution.service';

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
  colors: string[];
};

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less'],
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    RealPipe,
    PercentCustomPipe,
    NgApexchartsModule,
  ],
})
export class ContributionComponent {

  contributions: Contribution[] = [];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor( private readonly contributionService: ContributionService) {
    this.chartOptions = {
      series: [],
      chart: {
        width: 300,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show:false,
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
              show:false,
              position: 'bottom',
            },
          },
        },
      ],
      labels: [],

      colors: [],
    };
  }

  ngOnInit(): void {
    this.contributionService.getContribution().subscribe((data) => {
      this.contributions = data;
      this.updateChartData();
    });
  }

  updateChartData(): void {
    this.chartOptions.series = this.contributions.map(
      (contribution) => contribution.value
    );
    this.chartOptions.labels = this.contributions.map(
      (contribution) => contribution.name
    );
    this.chartOptions.colors = this.contributions.map(
      (contribution) => contribution.color
    );
  }

  sumContributionValues(): number {
    return this.contributions.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
  }
}
