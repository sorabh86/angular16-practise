import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user:User = {
    id: 1,
    name: 'sorabh',
  };
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    console.log(id);

    let user = this.userService.getUser(id);
    this.user = user;

    // fix not updating data when redirecting to same component but data is not updating
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      let id = +params['id'];
      let user = this.userService.getUser(id);
      this.user = user;
    });
  }

  // if you add your own observers remove it.
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
