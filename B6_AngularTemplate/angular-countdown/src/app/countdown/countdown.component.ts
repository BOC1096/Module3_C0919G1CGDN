import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private interValid = 0;
  message = '';
  remainingTime: number;
  @Input()
  seconds = 11;
  clearTime() {
    clearInterval(this.interValid);
  }
  constructor() { }

  ngOnInit() {
    this.reset();
    this.start();
  }
  ngOnDestroy() {
    this.clearTime();
  }
  start() {
    this.clearTime();
    this.countDown();
  }
  stop() {
    this.clearTime();
    this.message = `Holing at T-${this.remainingTime} countdown`;
  }
  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = 'Click start button to start the Countdown';
  }
  private countDown() {
    this.clearTime();
    this.interValid = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
