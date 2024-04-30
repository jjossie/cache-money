import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel'
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, PanelModule, NavTabsComponent, ChatFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cache-money.angular';
}
