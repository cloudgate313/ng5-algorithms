import {Component, OnInit} from '@angular/core';
import {Stack} from './data-object/stack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Stack<number>;



  ngOnInit(): void {
  }
}
