import { Component } from '@angular/core';


@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent {
  chatValue: string | undefined;

  sendChat() { 
    console.log(this.chatValue)
    this.chatValue = '';
    console.log(this.chatValue.length, this.chatValue, typeof(this.chatValue));
  }

}
