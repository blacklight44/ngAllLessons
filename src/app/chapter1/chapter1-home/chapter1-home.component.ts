import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1-home',
  templateUrl: './chapter1-home.component.html',
  styleUrls: ['./chapter1-home.component.css'],
})
export class Chapter1HomeComponent implements OnInit {
  password = '';
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      debugger;
      this.length = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
