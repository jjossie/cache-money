import { ChangeDetectorRef, Component } from '@angular/core';
import { BudgetTableComponent } from "../../components/budget-table/budget-table.component";
import { Expense } from '../../models/expense';
import { ChatConversationComponent } from '../../components/chat/chat-conversation/chat-conversation.component';
import { NebularChatConversationComponent } from '../../components/chat/nebular-chat-conversation/nebular-chat-conversation.component'
import { CacheMoneyApiService } from '../../services/cache-money-api.service';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrl: './budget.component.scss',
})
export class BudgetComponent {
  // Sample Data
  // spendCategories = ['Food','Transport','Housing', 'Entertainment']
  spendCategories! : string[];
  actualSpend = [288,123,250,172]
  // actualSpend!: number[];
  suggestedSpend = [200,50,200,200]
  expenseList: Expense[] = [
    {
    name: "Rent",
    value: 1200
  },
    {
    name: "Gas",
    value: 300
  },
    {
    name: "food",
    value: 400
  },
    {
    name: "Clothing",
    value: 500
  },
];

constructor(private api: CacheMoneyApiService, private cd: ChangeDetectorRef) {
  this.api.getAverageSpending("Doug").subscribe(averageSpending =>
    {
      console.log(averageSpending);
      console.log(Object.keys(averageSpending));
      console.log(Object.values(averageSpending));
      this.spendCategories = Object.keys(averageSpending);
      // this.actualSpend = Object.values(averageSpending).map(item => parseFloat(item));

      this.cd.detectChanges();
    })
}
}
