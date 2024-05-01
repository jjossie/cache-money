import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
        label: "Budget Assistant",
      },
      {
        routerLink: "transactions",
        label: "Spending",
      },
    ];
  }

  ngOnInit() {

  }
}
