import { Injectable } from '@angular/core';
import { Account } from '../type/types';

@Injectable()
export class AccountService {
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

    addAcount(name:string, status:string) {
        this.accounts.push({name:name,status:status});
    }

    updateStatus(id:number, status:string) {
        this.accounts[id].status = status;
    }
    
}