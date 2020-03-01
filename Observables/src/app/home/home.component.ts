import { Component, OnInit } from '@angular/core';
import {Subscription, interval, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObSubscription: Subscription; 

  constructor() { }

  ngOnInit() {
   // this.firstObSubscription = interval(1000).subscribe(count =>
     // console.log(count)
      //)
      const customObservable = Observable.create(observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000)
      });

      this.firstObSubscription = customObservable.subscribe(data =>
        console.log(data));
    }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }

}
