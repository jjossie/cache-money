import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-nav-tabs',
  // standalone: true,
  // imports: [TabMenuModule],
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.scss',
})
export class NavTabsComponent implements OnInit{

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        routerLink: "transactions",
        label: "Home",
      },
      {
        routerLink: "accounts",
        label: "Accounts",
      },
      {
        routerLink: "budget",
        label: "Budget",
      },
    ];
  }

  ngOnInit() {

  }
}
