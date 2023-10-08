import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = ['Sorabh', 'Neeraj'];
  inactiveUsers = ['Vivek', 'Gaurav', 'Manu'];

  onActiveStateChangeHandle(index:number) {
    console.log('add to active');
    this.activeUsers.push(this.inactiveUsers.splice(index, 1)[0]);
  }
  onInactiveStateChangeHandle(index:number) {
    console.log('add to inactive');
    this.inactiveUsers.push(this.activeUsers.splice(index, 1)[0]);
  }
}
