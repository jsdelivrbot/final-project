import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { DebtComponent } from './components/debt/debt.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, 
    children:[
      { path: 'expense', component: ExpenseComponent },
      
      ]},

  
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule, ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, 
  ExpenseComponent, DashboardComponent,DebtComponent ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
