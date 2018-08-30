import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {
  unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  static merge(left: number[], right: number[]): number[] {
    const array: number[] = [];
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];

      if (lItem == null) {
        array.push(rItem);
        rIndex++;
      } else if (rItem == null) {
        array.push(lItem);
        lIndex++;
      } else if (rItem > lItem) {
        array.push(lItem);
        lIndex++;
      } else {
        array.push(rItem);
        rIndex++;
      }
    }
    return array;
  }

  mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }
    array = array.slice();

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return MergeSortComponent.merge(this.mergeSort(left), this.mergeSort(right));
  }

  constructor() { }

  ngOnInit() {
    console.log(this.mergeSort(this.unsortedArray), ': mergeSort');
  }

}
