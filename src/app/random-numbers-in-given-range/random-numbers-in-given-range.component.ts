import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-numbers-in-given-range',
  templateUrl: './random-numbers-in-given-range.component.html',
  styleUrls: ['./random-numbers-in-given-range.component.css']
})
export class RandomNumbersInGivenRangeComponent implements OnInit {

  static randomNumberInGivenRange(start: number, before: number) {
    return start + Math.floor(Math.random() * (before - start));
  }

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      console.log(RandomNumbersInGivenRangeComponent.randomNumberInGivenRange(31, 42), 'this.randomNumberInGivenRange(31, 42)');
    }
  }
}
