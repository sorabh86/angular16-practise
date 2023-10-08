import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus } from '../type/types';
import { LoggerService } from '../service/logger.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggerService]
})
export class AccountComponent {
  @Input() account:{name:string, status:string}
  @Input() id:number;

  constructor(private loggerService:LoggerService, 
    private accountService:AccountService){}

  onSet(status:string) {
    this.accountService.updateStatus(this.id, status);
    this.loggerService.logStatusChange(status);
  }
}
