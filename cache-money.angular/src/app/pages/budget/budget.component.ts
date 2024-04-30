import { Component } from '@angular/core';
import { BudgetTableComponent } from "../../components/budget-table/budget-table.component";
import { Expense } from '../../models/expense';
import { ChatConversationComponent } from '../../components/chat/chat-conversation/chat-conversation.component';
import { NebularChatConversationComponent } from '../../components/chat/nebular-chat-conversation/nebular-chat-conversation.component'

@Component({
    selector: 'app-budget',
    // standalone: true,
    templateUrl: './budget.component.html',
    styleUrl: './budget.component.scss',
    // imports: [BudgetTableComponent]
})
export class BudgetComponent {
  expenseList: Expense[] = [
    {
    name: "Rent",
    value: 1200
  },
    {
    name: "yo Momma",
    value: 1203333330
  },
    {
    name: "food",
    value: 12000
  },
    {
    name: "yeezys",
    value: 100
  },
];
}
