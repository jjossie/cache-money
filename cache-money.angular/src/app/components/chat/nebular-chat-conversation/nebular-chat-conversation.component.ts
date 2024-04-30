import { Component } from '@angular/core';
import { NbChatModule, NbFocusMonitor, NbStatusService } from '@nebular/theme';

@Component({
  // standalone: true,
  selector: 'app-nebular-chat-conversation',
  // imports: [ NbChatModule ],
  providers: [ NbStatusService, NbFocusMonitor ],
  // styles: [`
  //   ::ng-deep nb-layout-column {
  //     justify-content: center;
  //     display: flex;
  //   }
  //   nb-chat {
  //     width: 500px;
  //     height: 80vw;
  //   }
  // `],
  templateUrl: './nebular-chat-conversation.component.html',
})
export class NebularChatConversationComponent {

  messages: any[] = [
    {
      text: 'Drag & drop a file or a group of files.',
      date: new Date(),
      reply: true,
      user: {
        name: 'Bot',
        avatar: 'https://i.gifer.com/no.gif',
      },
    },
  ];

  sendMessage(event: any) {
    // const files = !event.files ? [] : event.files.map((file: any) => {
    //   return {
    //     url: file.src,
    //     type: file.type,
    //     icon: 'file-text-outline',
    //   };
    // });

    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   // files: files,
    //   // type: files.length ? 'file' : 'text',
    //   reply: true,
    //   user: {
    //     name: 'Jonh Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // });
  }
}