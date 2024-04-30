import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { NbChatModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app.routing.module';
import { CardModule } from 'primeng/card';
import { ChatConversationComponent } from './components/chat/chat-conversation/chat-conversation.component';
import { NebularChatConversationComponent } from './components/chat/nebular-chat-conversation/nebular-chat-conversation.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { NgFor, NgForOf } from '@angular/common';
import { BudgetTableComponent } from "./components/budget-table/budget-table.component";
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { NudgeCardComponent } from './components/nudge-card/nudge-card.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [
        // App
        AppComponent,
        // Pages
        TransactionsComponent,
        AccountsComponent,
        BudgetComponent,
        // Components
        NavTabsComponent,
        ChatConversationComponent,
        ChatMessageComponent,
        NebularChatConversationComponent,
        TableComponent,
        BudgetTableComponent,
        AccountsTableComponent,
        NudgeCardComponent,
        ChatFooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        // Angular Stuff
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        NgFor,
        NgForOf,
        // 3rd Party Libraries
        ButtonModule,
        PanelModule,
        TabMenuModule,
        NbThemeModule.forRoot(),
        NbChatModule,
        CardModule,
        ButtonModule,
        TableModule
    ]
})
export class AppModule {}
