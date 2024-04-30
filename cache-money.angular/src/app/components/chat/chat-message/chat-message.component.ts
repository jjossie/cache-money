import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-chat-message',
  // standalone: true,
  // imports: [CardModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  @Input()
  text: string = "";
  @Input()
  sent: boolean = false;

  constructor() {
    
  }
}
