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
          if(count >= 2) {
            observer.complete();
          };
          if (count === 3) {
            observer.error(new Error('Error!'))
          }
          count++;
        }, 1000)
      });

      this.firstObSubscription = customObservable.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          alert(error.message);
        },
        ()=> {
          console.log('completed');
        });
    }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }

}
