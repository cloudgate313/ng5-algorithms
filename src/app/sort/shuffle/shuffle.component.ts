import { Component, OnInit } from '@angular/core';
import { RandomNumbers } from '../random-numbers';
@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {
  shuffle<T>(array: T[]): T[] {
    array = array.slice();

    const randomNumbers = new RandomNumbers;

    for (let i = 0; i < array.length; i++) {
      const randomChoiceIndex = randomNumbers.randomNumberInRange(i, array.length);
      [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }

    return array;
  }

  constructor() { }

  ngOnInit() {
  }

}
