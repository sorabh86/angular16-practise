import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../type/types';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  @Output() onAccountAdded = new EventEmitter<Account>();

  onCreateAccount(accountName:string, accountStatus:string) {
    this.onAccountAdded.emit({name:accountName, status:accountStatus});
  }
}
