import { Component } from '@angular/core';
import { ChatConversationComponent } from '../../components/chat/chat-conversation/chat-conversation.component';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [ChatConversationComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {

}
