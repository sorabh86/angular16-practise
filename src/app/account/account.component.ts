import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus } from '../type/types';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account:{name:string, status:string}
  @Input() id:number;
  @Output() onChange = new EventEmitter<AccountStatus>();

  onSet(status:string) {
    this.onChange.emit({id:this.id, newStatus:status});
  }
}
