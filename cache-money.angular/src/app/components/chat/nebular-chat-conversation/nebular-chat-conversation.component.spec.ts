import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularChatConversationComponent } from './nebular-chat-conversation.component';

describe('NebularChatConversationComponent', () => {
  let component: NebularChatConversationComponent;
  let fixture: ComponentFixture<NebularChatConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NebularChatConversationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NebularChatConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
