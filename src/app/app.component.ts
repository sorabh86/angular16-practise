import { Component, OnInit } from '@angular/core';
import { Account, AccountStatus } from './type/types';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit {
  accounts:Account[] = [];

  constructor(private accountService:AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
