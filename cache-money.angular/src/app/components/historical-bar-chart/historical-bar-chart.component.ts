import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historical-bar-chart',
  templateUrl: './historical-bar-chart.component.html',
  styleUrl: './historical-bar-chart.component.scss'
})
export class HistoricalBarChartComponent {

  @Input()
  spendCategories!: string[];

  @Input() actualSpend!: number[];
  @Input() suggestedSpend!: number[];

  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


    this.data = {
      labels: this.spendCategories,
      datasets: [
        {
          label: 'Actual Spending',
          backgroundColor: '#1ba39c',
          borderColor: '#1ba39c',
          data: this.actualSpend
        },
        {
          label: 'Suggested Spending',
          backgroundColor: '#bf8200',
          borderColor: '#bf8200',
          data: this.suggestedSpend
        }
      ]
    };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }


  ngOnChanges() {
    console.log("Changes detected - new categories: ", this.spendCategories);
    console.log("Changes detected - old labels: ", this.data?.labels);
    console.log("Changes detected - amounts: ", this.actualSpend);
    this.data.labels = this.spendCategories;
    console.log("Changes detected - new labesl: ", this.data?.labels);
    this.data = {
      labels: this.spendCategories,
      datasets: [
        {
          label: 'Actual Spending',
          backgroundColor: '#1ba39c',
          borderColor: '#1ba39c',
          data: this.actualSpend
        },
        {
          label: 'Suggested Budget',
          backgroundColor: '#bf8200',
          borderColor: '#bf8200',
          data: this.suggestedSpend
        }
      ]
    };
  }
}
