import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './dashboard/components/components.component';
import { AccountComponent } from './dashboard/components/account/account.component';
import { CreditAccountComponent } from './dashboard/components/credit-account/credit-account.component';
import { LatestStatementsComponent } from './dashboard/components/latest-statements/latest-statements.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './site/login/login.component';
import { ModulesComponent } from './site/modules/modules.component';
import { AnnuityComponent } from './site/modules/annuity/annuity.component';
import { ComplexityComponent } from './site/modules/complexity/complexity.component';
import { CreateAcountComponent } from './site/modules/create-acount/create-acount.component';
import { DigitalAccountComponent } from './site/modules/digital-account/digital-account.component';
import { SimplifyLifeComponent } from './site/modules/simplify-life/simplify-life.component';



@NgModule({
  declarations: [DashboardComponent, ComponentsComponent, AccountComponent, CreditAccountComponent, LatestStatementsComponent, SidebarComponent, HomeComponent, SiteComponent, LoginComponent, ModulesComponent, AnnuityComponent, ComplexityComponent, CreateAcountComponent, DigitalAccountComponent, SimplifyLifeComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
