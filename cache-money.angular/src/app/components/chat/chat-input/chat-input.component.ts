import { Component, EventEmitter, Output } from '@angular/core';
import { CacheMoneyApiService } from '../../../services/cache-money-api.service';
import { ChatMessage } from '../../../models/chat/chat';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class ChatInputComponent {
  chatValue = '';

  @Output()
  newMessageEvent = new EventEmitter<ChatMessage>();

  constructor(private api: CacheMoneyApiService) {
    this.chatValue = '';
  }

  sendChat() {
    console.log(this.chatValue);
  this.newMessageEvent.emit({text: this.chatValue, sent: true});

    this.api.sendChatMessage(this.chatValue, 'Doug').subscribe((data) => {
      this.newMessageEvent.emit({text: `${data}`, sent: false});
      console.log(data);
    });

    this.chatValue = '';
    console.log(this.chatValue.length, this.chatValue, typeof this.chatValue);

  }
}
