import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import {Subscription} from 'rxjs';

export type User = {
  title:string;
  body:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  users:User[] = [
    {title:"User 1", body:"User 1 is great, welcome to our land."},
    {title:"User 2", body:"User 2 welcome, we are waiting for you."},
  ];
  isActivated = false;
  subscription:Subscription;

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
    this.subscription = this.userService.activatedEmitter.subscribe(bool=>{
      this.isActivated=bool;
    });   
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
