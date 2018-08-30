import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent implements OnInit {
  unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /**
   * Searches for specific element in a given sorted array
   * @returns the index of the element (-1 if its not found)
   */


 binarySearch(array: number[], element, start = 0, end = array.length - 1): number {
   if (end < start) {
     return - 1;
   }
   const middle = Math.floor((start + end) / 2);
   return element === array[middle] ? element :
     element < array[middle] ? this.binarySearch(array, element, start, middle - 1) :
       this.binarySearch(array, element, middle + 1, end);
  }

  constructor() { }

  ngOnInit() {
    console.log('Index of 2: ', this.binarySearch(this.unsortedArray, 2), 'binarySearch');
    console.log('22 not found: ', this.binarySearch(this.unsortedArray, 22), 'binarySearch');
  }

}
