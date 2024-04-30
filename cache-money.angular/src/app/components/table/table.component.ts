import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

export interface Transaction {
  name: string;
  amount: number;
  type: 'deposit' | 'withdrawal'; // Enforces deposit or withdrawal type
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ TableModule, CommonModule ],
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
