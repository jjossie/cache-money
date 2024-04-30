import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Account } from '../../models/account';

@Component({
  selector: 'app-accounts-table',
  // standalone: true,
  // imports: [TableModule, CommonModule],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.scss'
})
export class AccountsTableComponent {

  @Input() accounts: Account[] = [];

  cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'value', header: 'Value' },
    { field: 'type', header: 'Type' }
  ];

}
