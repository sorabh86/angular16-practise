import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users:string[] = [];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetActive(i:number) {
    this.userService.setToActive(i);
  }
}
