import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel'
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { TableComponent } from './components/table/table.component'
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { BudgetTableComponent } from './components/budget-table/budget-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cache-money.angular';
}
