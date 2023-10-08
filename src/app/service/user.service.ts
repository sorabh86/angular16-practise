import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Sorabh', 'Neeraj'];
  inactiveUsers = ['Vivek', 'Gaurav', 'Manu'];

  setToActive(index:number) {
    this.activeUsers.push(this.inactiveUsers.splice(index, 1)[0]);
  }
  setToInactive(index:number) {
    this.inactiveUsers.push(this.activeUsers.splice(index, 1)[0]);
  }
}
