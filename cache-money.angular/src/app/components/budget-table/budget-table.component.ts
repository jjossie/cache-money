import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

export interface Expense {
  name: string;
  value: number;
}

@Component({
  selector: 'app-budget-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './budget-table.component.html',
  styleUrl: './budget-table.component.scss'
})
export class BudgetTableComponent {
  @Input() expenses: Expense[] = [];

  cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'value', header: 'Value' }
  ];
}


