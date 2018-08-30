import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  array = [4, 3, 2, 1];

  static bubbleSort(array: number[]): number[] {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          console.log(array);
        }
      }
    }
    return array;
  }

  static bubbleSortOptimized(array: number[]): number[] {
    array = array.slice();
    while (true) {
      let swapped = false;
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      } if (!swapped) {
        break;
      }
    }
    return array;
  }

  constructor() { }

  ngOnInit() {
    BubbleSortComponent.bubbleSort(this.array);
    BubbleSortComponent.bubbleSortOptimized(this.array);
  }

}
