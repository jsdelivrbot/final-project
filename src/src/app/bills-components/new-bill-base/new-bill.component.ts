import { Component, OnInit } from '@angular/core';
import { Newbill } from '../newbill.model';
import { NewbillService } from '../../input-components/monthlyspend/newbill.service';

@Component({
  selector: 'new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: [ './new-bill.component.scss' ]
})
export class NewbillComponent  implements OnInit {
    
  expenseList: Newbill[] = [];

  constructor(public newbillService: NewbillService) {}
  ngOnInit() {
    this.expenseList = this.newbillService.getExpenses();
}
}
