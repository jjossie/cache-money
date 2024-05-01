import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { Transaction } from '../../models/transaction';

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
}
