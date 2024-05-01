import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {

  @Input() transactions: Transaction[] = [];

  cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'amount', header: 'Amount' },
    { field: 'category', header: 'Category' },
    { field: 'account', header: 'Account' },
    { field: 'date', header: 'Date' }
  ];
}
