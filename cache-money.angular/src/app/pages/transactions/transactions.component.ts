import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { Account } from '../../models/account';
import { CacheMoneyApiService } from '../../services/cache-money-api.service';
import { Observable, Subject, of } from 'rxjs';

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
      ]

    categories :any[]= ['Food','Transport','Housing', 'Entertainment']

    // categories$: Subject<string[]>
    actualSpend = [180,280,100,320,330]
    suggestedSpend = [200,200,300,200,300]

      constructor(private api: CacheMoneyApiService) {
        // this.categories$ = new Subject();
        this.api.getCurrentSpending("Doug").subscribe(currentSpending => {
          this.transactions = currentSpending.transactions
          .map(transaction => {
            return {
              name: transaction.merchant,
              amount: transaction.amount,
              category: transaction.category,
              account: transaction.account,
              date: transaction.date,
            };
          })
          .filter(transaction => {
            const date = new Date(transaction.date)
            return date.getMonth() === new Date().getMonth();
          })
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        //   this.categories$.next(Object.keys(currentSpending.categories) || ['']);
          this.categories = Object.keys(currentSpending.categories);
          console.log(this.categories);
          
        });

        

      }
      
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
        },
        {
            name: "Vanguard Brokerage Account",
            value: 55000,  // Negative value for liability
            type: "Investments"
          },
          {
            name: "Fideliti",
            value: 13000,  // Negative value for liability
            type: "Investments"
          }
      ];

      
}

