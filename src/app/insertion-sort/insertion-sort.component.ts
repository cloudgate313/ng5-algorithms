import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {
  unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  /**
   * Sorts an array using insertion sort
   */
  static insertionSort(array: number[]): number[] {
    array = array.slice();
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }

  constructor() { }

  ngOnInit() {
    console.log(InsertionSortComponent.insertionSort(this.unsortedArray), ': InsertionSortComponent');
  }

}
