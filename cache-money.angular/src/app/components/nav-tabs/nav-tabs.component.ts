import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.scss',
})
export class NavTabsComponent implements OnInit{

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        routerLink: "budget",
        label: "Budget",
      },
      {
        routerLink: "transactions",
        label: "Transactions",
      },
    ];
  }

  ngOnInit() {

  }
}
