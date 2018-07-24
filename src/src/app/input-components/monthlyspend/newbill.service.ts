import { Newbill } from '../newbill.model'
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewbillService {
    private expenses: Newbill[] = [];

    getExpenses() {
        return this.expenses;
    }

    addExpense(expenseOrigin: string, expenseAmount: string, expenseDate: string) {
        const expense: Newbill = {expenseOrigin: expenseOrigin, expenseAmount: expenseAmount, expenseDate: expenseDate};
        this.expenses.push(expense); 
    }
}