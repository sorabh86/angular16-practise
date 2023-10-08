import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Account } from '../type/types';
import { LoggerService } from '../service/logger.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggerService]
})
export class NewAccountComponent {

  @ViewChild('accountNameInput') accountNameInput:ElementRef;
  @ViewChild('accountStatusInput') accountStatusInput:ElementRef;

  constructor(private loggerService:LoggerService,
    private accountService:AccountService){}

  onCreateAccount(accountName:string, accountStatus:string) {
    if(accountName=='') return;

    this.accountService.addAcount(accountName, accountStatus);
    
    this.loggerService.logStatusChange(accountStatus);
    this.accountNameInput.nativeElement.value = '';
    this.accountStatusInput.nativeElement.value='active';
  }
}
