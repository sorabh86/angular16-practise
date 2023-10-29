import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Observable, Subscription, interval } from 'rxjs';
import {map, filter} from 'rxjs/operators';

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
        if(count == 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error("Count is greater then 3!"));
        }
        count++;
      }, 1000);
    });

    // operator to transform the data
    const filteredObservable = intervalObservable.pipe(
      filter((data:number) => {
        return data > 0;
      }),
      map((data:number) => {
        return 'Round: ' + (data + 1);
      })
    );

    filteredObservable.subscribe({
      next:data => { // result handle
        console.log(data);
      }, 
      error: error => { // error handler
        alert(error.message);
      }, 
      complete: () => { // complete handler
        console.log('Completed!!');
      }
    });
  }
  
  ngOnDestroy(): void {
      this.firstObservableSubscription.unsubscribe();
  }
}
