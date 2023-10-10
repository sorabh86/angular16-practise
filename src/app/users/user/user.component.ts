import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user = {
    id: 1,
    name: 'sorabh',
  };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: 'Unknown',
    };

    // fix not updating data when redirecting to same component but data is not updating
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  // if you add your own observers remove it.
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
