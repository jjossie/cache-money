import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense';



@Component({
  selector: 'app-budget-table',
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


