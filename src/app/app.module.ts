import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { AnagramComponent } from './anagram/anagram.component';
import { StringSortComponent } from './string-sort/string-sort.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { DuplicateArrayElementComponent } from './duplicate-array-element/duplicate-array-element.component';
import { RandomNumbersInGivenRangeComponent } from './random-numbers-in-given-range/random-numbers-in-given-range.component';
import { AtoiComponent } from './atoi/atoi.component';
import { ShuffleComponent } from './sort/shuffle/shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeSortComponent,
    InsertionSortComponent,
    QuickSortComponent,
    BubbleSortComponent,
    PalindromeComponent,
    FizzBuzzComponent,
    AnagramComponent,
    StringSortComponent,
    BinarySearchComponent,
    DuplicateArrayElementComponent,
    RandomNumbersInGivenRangeComponent,
    AtoiComponent,
    ShuffleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
