import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {
  list = [];

  fizzBuzz(): void {
    for (let index = 1; index < 101; index++) {
      const Fizz = index % 3 === 0;
      const Buzz = index % 5 === 0;
      const result = Fizz && Buzz ? 'Fizz Buzz' :
        Fizz ? 'Fizz' :
          Buzz ? 'Buzz' :
            index;
      this.list.push(result);
    }
  }

  constructor() { }

  ngOnInit() {
    this.fizzBuzz();
  }
}
