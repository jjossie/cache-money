import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
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
    { field: 'type', header: 'Type' }
  ];
}
