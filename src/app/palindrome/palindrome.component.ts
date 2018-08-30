import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  static isPalindrome(str: string): boolean {
    const reverse = str.split('').reverse().join('');
    return str === reverse;
  }

  isPalindromeOptimal(str: string): boolean {
    const unmatched = new Set<string>();
    str.split('').forEach(char => {
      if (unmatched.has(char)) {
        unmatched.delete(char);
      } else {
        unmatched.add(char);
      }
    });
    return unmatched.size <= 1;
  }

  constructor() { }

  ngOnInit() {
    console.log(PalindromeComponent.isPalindrome('aziza'), 'aziza');
    console.log(this.isPalindromeOptimal('aziza'), 'aziza');
  }

}
