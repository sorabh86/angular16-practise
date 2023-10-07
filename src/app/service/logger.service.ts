import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logStatusChange(status:string) {
    console.log('New Status: '+status);
  }
}
