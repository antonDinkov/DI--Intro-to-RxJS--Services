import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-time',
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnDestroy {

    timeStreamSubscription: Subscription;

    time$ = interval(1000).pipe(startWith(''), map(()=> new Date()));

    timeValue!: Date;

    constructor() {
        this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
    }

    ngOnDestroy(): void {
        this.timeStreamSubscription.unsubscribe();
    }
}
