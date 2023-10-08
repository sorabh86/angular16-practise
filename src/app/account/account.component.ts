import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus } from '../type/types';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggerService]
})
export class AccountComponent {
  @Input() account:{name:string, status:string}
  @Input() id:number;
  @Output() onChange = new EventEmitter<AccountStatus>();

  constructor(private loggerService:LoggerService){}

  onSet(status:string) {
    this.onChange.emit({id:this.id, newStatus:status});
    this.loggerService.logStatusChange(status);
  }
}
