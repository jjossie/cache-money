import { Routes } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { BudgetComponent } from './pages/budget/budget.component';

export const routes: Routes = [
    {
        "path": "transactions",
        "component": TransactionsComponent
    },
    {
        "path": "accounts",
        "component": AccountsComponent
    },
    {
        "path": "budget",
        "component": BudgetComponent
    },
];
