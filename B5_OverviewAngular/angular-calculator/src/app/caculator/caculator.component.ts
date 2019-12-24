import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  number1: number;
  number2: number;
  result: number;
  operator = '+';

  checkKey(event) {
    if (event.keyCode === 101) {
      event.preventDefault();
    }
  }
  onOperatorChange(value) {
    this.operator = value;
  }

  caculator() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 * 1 + this.number2 * 1;
        break;
      case '-':
        this.result = this.number1 * 1 - this.number2 * 1;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
