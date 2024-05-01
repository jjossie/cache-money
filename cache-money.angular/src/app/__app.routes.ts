import { Routes } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BudgetComponent } from './pages/budget/budget.component';

export const routes: Routes = [
    {
        "path": "budget",
        "component": BudgetComponent
    },
    {
        "path": "transactions",
        "component": TransactionsComponent
    },
];
