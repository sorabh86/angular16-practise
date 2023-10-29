import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

export type User = {
  title:string;
  body:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:User[] = [
    {title:"User 1", body:"User 1 is great, welcome to our land."},
    {title:"User 2", body:"User 2 welcome, we are waiting for you."},
  ];
  isActivated = false;

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
    this.userService.activatedEmitter.subscribe(bool=>{
      this.isActivated=bool;
    });   
  }
}
