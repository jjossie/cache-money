import { Component } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
  selector: 'app-chat-conversation',
  standalone: true,
  imports: [ChatMessageComponent],
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.scss'
})
export class ChatConversationComponent {

}
