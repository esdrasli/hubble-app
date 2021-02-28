import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { ComponentsComponent } from './dashboard/components/components.component';
import { CreditAcountComponent } from './dashboard/components/credit-acount/credit-acount.component';
import { LatestStatementsComponent } from './dashboard/components/latest-statements/latest-statements.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AccountComponent,
    CreditAcountComponent,
    LatestStatementsComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
