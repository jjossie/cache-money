import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-nav-tabs',
  standalone: true,
  imports: [ ButtonModule ],
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.scss'
})
export class NavTabsComponent {

}
