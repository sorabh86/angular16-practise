import { Component, OnInit } from '@angular/core';
import { User, UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = [];

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
