import { Component } from '@angular/core';
import { NewbillService } from './newbill.service';

@Component({
  selector: 'monthlyspend',
  templateUrl: './monthlyspend.component.html',
  styleUrls: [ './monthlyspend.component.scss' ]
})
export class MonthlyspendComponent  {
  enteredExpenseOrigin = '';
  enteredExpenseAmount = '';
  enteredExpenseDate = '';

  constructor(public newbillService: NewbillService) {}

  onAddExpense(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.newbillService.addExpense(form.value.expenseOrigin, form.value.expenseAmount, form.value.expenseDate)
  }
}