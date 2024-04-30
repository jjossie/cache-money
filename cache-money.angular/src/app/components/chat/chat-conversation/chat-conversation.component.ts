import { Component } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatMessage } from '../../../models/chat/chat';

@Component({
  selector: 'app-chat-conversation',
  // standalone: true,
  // imports: [ChatMessageComponent],
  templateUrl: './chat-conversation.component.html',
  styleUrl: './chat-conversation.component.scss'
})
export class ChatConversationComponent {
  messages: ChatMessage[] = [
    {
      text: "Test message one",
      sent: true,
      time: "now"
    },
    {
      text: "Bum bum bay ay ay ay ay ay eee eee how you feelin how you been? bum bum bumb bow ay ay ay ay cant stop us now woooooooo",
      sent: false,
      time: "now"
    },
    {
      text: "for all my southside fellas that know me best i feel like chatGPT might still be dumb at math, why i made that AI famous 🗿",
      sent: true,
      time: "now"
    },
  ]
}
