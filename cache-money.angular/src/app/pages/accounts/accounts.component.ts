import { Component } from '@angular/core';
import { AccountsTableComponent } from "../../components/accounts-table/accounts-table.component";

@Component({
    selector: 'app-accounts',
    standalone: true,
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.scss',
    imports: [AccountsTableComponent]
})
export class AccountsComponent {

}
