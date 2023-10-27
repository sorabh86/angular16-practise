import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Observable, Subscription, interval } from 'rxjs';

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
    // this.firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // custom observable
    const intervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
    intervalObservable.subscribe(data => {
      console.log(data);
    });
  }
  
  ngOnDestroy(): void {
      this.firstObservableSubscription.unsubscribe();
  }
}
