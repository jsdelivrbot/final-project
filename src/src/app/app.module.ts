import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NewbillService } from './input-components/monthlyspend/newbill.service';

import { DashboardComponent } from './frame-components/dashboard/dashboard.component';
import { LoginComponent } from './frame-components/login/login.component';
import { SignupComponent } from './frame-components/signup/signup.component';

import { MadeComponent } from './input-components/made/made.component';
import { SavingsComponent } from './input-components/savings/savings.component';
import { InputsComponent } from './input-components/inputs/inputs.component';
import { DailyspendComponent } from './input-components/dailyspend/dailyspend.component';
import { MonthlyspendComponent } from './input-components/monthlyspend/monthlyspend.component';

import { NewbillComponent } from './bills-components/new-bill-base/new-bill.component';
import { BillsComponent } from './bills-components/bills/bills.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'inputs', component: InputsComponent,
        children: [
          { path: 'dailyspend', component: DailyspendComponent },
          { path: 'monthlyspend', component: MonthlyspendComponent },
          { path: 'made', component: MadeComponent },
          { path: 'savings', component: SavingsComponent },
        ]
      },
      { path: 'bills', component: BillsComponent },
      { path: 'made', component: MadeComponent },
      { path: 'savings', component: SavingsComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

    ]
  },



];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule,],
  declarations: [AppComponent, LoginComponent, SignupComponent, DailyspendComponent, MonthlyspendComponent,
    DashboardComponent, InputsComponent, MadeComponent, SavingsComponent, NewbillComponent, BillsComponent],
  providers: [NewbillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
