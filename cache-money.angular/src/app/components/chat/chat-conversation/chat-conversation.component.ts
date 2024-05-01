import { Component } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatMessage } from '../../../models/chat/chat';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.scss'
})
export class ChatConversationComponent {
  
  messages: ChatMessage[] = [];

  onNewMessage(message: ChatMessage) {
    this.messages.push(message);
  }


}
