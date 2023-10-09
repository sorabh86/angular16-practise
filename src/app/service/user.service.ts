import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Sorabh', 'Neeraj'];
  inactiveUsers = ['Vivek', 'Gaurav', 'Manu'];

  constructor(private counterService:CounterService){}

  setToActive(index:number) {
    this.activeUsers.push(this.inactiveUsers.splice(index, 1)[0]);
    this.counterService.incrementInactiveToActive();
  }
  setToInactive(index:number) {
    this.inactiveUsers.push(this.activeUsers.splice(index, 1)[0]);
    this.counterService.incrementActiveToInactive();
  }
}
