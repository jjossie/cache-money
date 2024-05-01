import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { Account } from '../../models/account';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
    transactions: Transaction[] = [
        { name: "Salary", amount: 2000, category: "Income", account: "Checking" },
        { name: "Rent", amount: 1000, category: "Expense", account: "Checking" },
        { name: "Groceries", amount: 150, category: "Expense", account: "Checking" },
        { name: "Investment return", amount: 50, category: "Income", account: "Savings" },
        { name: "Movie ticket", amount: 15, category: "Entertainment", account: "Credit card" },
      ];
    accounts: Account[] = [
        {
          name: "Checking Account",
          value: 1000.00,
          type: "Asset"
        },
        {
          name: "Savings Account",
          value: 5000.00,
          type: "Asset"
        },
        {
          name: "Credit Card",
          value: -100.00,  // Negative value for liability
          type: "Liability"
        }
      ];
}
