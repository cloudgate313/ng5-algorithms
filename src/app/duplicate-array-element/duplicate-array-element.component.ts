import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duplicate-array-element',
  templateUrl: './duplicate-array-element.component.html',
  styleUrls: ['./duplicate-array-element.component.css']
})
export class DuplicateArrayElementComponent implements OnInit {
  unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

  /**
   * Returns the first repeated item from an array if any
   * @throws {Error} if there is no item repetition
   */
  static repeatedItem<T>(array: T[]): T {
    const set = new Set<T>();
    for (const item of array) {
      if (set.has(item)) {
        return item;
      } else {
        set.add(item);
      }
    }
    // throw new Error('No item repetition');
    // converted for plunker output
      throw new Error('No item repetition');
  }

  constructor() { }

  ngOnInit() {
    console.log(DuplicateArrayElementComponent.repeatedItem(this.unsortedArray), 'DuplicateArrayElementComponent');
  }

}
