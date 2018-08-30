import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atoi',
  templateUrl: './atoi.component.html',
  styleUrls: ['./atoi.component.css']
})
export class AtoiComponent implements OnInit {

  static atoi(str: string): number {
    // converts string to it's number value'
    const zeroCode = '0'.charCodeAt(0);

    let sign = 1;
    if (str[0] === '-') {
      str = str.substring(1);
      sign = -1;
    }

    let acc = 0;
    for (const char of str) {
      // (char.charCodeAt(0) - zeroCode): gets the number value by determining it's distance from zero'
      acc = acc * 10 + (char.charCodeAt(0) - zeroCode);
    }

    return sign * acc;
  }

  constructor() { }

  ngOnInit() {
    console.log(AtoiComponent.atoi('23443'));
  }

}
