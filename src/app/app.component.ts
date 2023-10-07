import { Component } from '@angular/core';
import { Account, AccountStatus } from './type/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts:Account[] = [
    {
      name:'Master Account',
      status:'active'
    },
    {
      name:'Test Account',
      status:'inactive'
    },
    {
      name:'Hidden Account',
      status:'unknown'
    },
  ];

  onStatusChanged(status:AccountStatus) {
    console.log(status);
    this.accounts[status.id].status = status.newStatus;
  }

  onAccountAdded(newAccount:Account) {
    this.accounts.push(newAccount);
  }
}
