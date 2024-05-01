import { RouterModule, Routes } from '@angular/router';


import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "transactions",
        component: TransactionsComponent
    },
    {
        path: "budget",
        component: BudgetComponent
    },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
