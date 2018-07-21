import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MadeComponent } from './components/made/made.component';
import { SavingsComponent } from './components/savings/savings.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { DailyspendComponent } from './components/dailyspend/dailyspend.component';
import { MonthlyspendComponent } from './components/monthlyspend/monthlyspend.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, 
    children:[
      { path: 'dailyspend', component: DailyspendComponent},
      { path: 'monthlyspend', component: MonthlyspendComponent},
      { path: 'made', component: MadeComponent},
      { path: 'savings', component: SavingsComponent},
      ]},
  

  
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule, ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, DailyspendComponent, MonthlyspendComponent,
  DashboardComponent, InputsComponent, MadeComponent, SavingsComponent ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
