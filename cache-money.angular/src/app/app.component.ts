import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel'
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';
import { NudgeCardComponent } from './components/nudge-card/nudge-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, PanelModule, NavTabsComponent, ChatFooterComponent, NudgeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cache-money.angular';
  content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
}
