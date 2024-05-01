import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spending-bar-chart',
  templateUrl: './spending-bar-chart.component.html',
  styleUrl: './spending-bar-chart.component.scss'
})
export class SpendingBarChartComponent {

  @Input() actualSpend!: number[];
  @Input() suggestedSpend!: number[];
  @Input() spendCategories !: string[];
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
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              tooltip: {
                  mode: 'index',
                  intersect: false
              },
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  stacked: true,
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
}
