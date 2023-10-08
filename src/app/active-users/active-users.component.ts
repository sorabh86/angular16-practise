import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[] = []; 

  constructor(private userService:UserService) {}

  ngOnInit(): void {
      this.users = this.userService.activeUsers;
  }

  onSetActive(i:number) {
    this.userService.setToInactive(i);
  }
}
