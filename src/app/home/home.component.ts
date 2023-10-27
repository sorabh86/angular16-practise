import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;

  private firstObservableSubscription:Subscription;
  
  constructor(

  ) {}

  ngOnInit(): void {
    // create a observables
    // we will get new value every second
    this.firstObservableSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }
  
  ngOnDestroy(): void {
      this.firstObservableSubscription.unsubscribe();
  }
}
