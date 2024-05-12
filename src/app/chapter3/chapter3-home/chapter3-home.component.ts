import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

// Access faker methods like this:
const randomText = faker.lorem.text();
@Component({
  selector: 'app-chapter3-home',
  templateUrl: './chapter3-home.component.html',
  styleUrls: ['./chapter3-home.component.css'],
})
export class Chapter3HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  randomText = faker.lorem.sentence();
  enteredText = '';
  can = 'incorrect';

  getInputValue(value: string) {
    console.log(this.randomText.split(''));
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
