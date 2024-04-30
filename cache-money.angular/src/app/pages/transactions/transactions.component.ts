import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";

@Component({
    selector: 'app-transactions',
    standalone: true,
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss',
    imports: [TableComponent]
})
export class TransactionsComponent {

}
