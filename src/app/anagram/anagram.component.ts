import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

  static areAnagrams(s1: string, s2: string): boolean {
    const str1: string = s1.toLowerCase().split('').sort().join('');
    const str2: string = s2.toLowerCase().split('').sort().join('');
    return str1 === str2;
  }

  static trySplit(word: string): void {
    console.log(word.split('').sort().join(''), ': trySplit');
  }

  // Big O of n
  static isAnagramOptimized(s1: string, s2: string): boolean {
    const charCount = new Map<string, number>();
    for (const char of s1.split('')) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of s2.split('')) {
      if (!charCount.has(char)) {
        return false;
      }
      charCount.set(char, charCount.get(char) - 1);
    }
    return Array.from(charCount.values()).every(val => val === 0);
  }


  constructor() { }

  ngOnInit() {
    AnagramComponent.areAnagrams('heart', 'earth');
    AnagramComponent.trySplit('Copernicus');
    console.log(AnagramComponent.isAnagramOptimized('earthhh', 'heart'));
  }

}
