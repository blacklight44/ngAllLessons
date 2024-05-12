import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2-home',
  templateUrl: './chapter2-home.component.html',
  styleUrls: ['./chapter2-home.component.css'],
})
export class Chapter2HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: '/assets/biking.jpeg',
      username: 'cbdag',
      content: 'Çok hızlı sürdüm',
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'cbuludag',
      content: 'Bugünde iyi tırmandım',
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'cbdoga',
      content: 'Hadi biraz Maçka Parkında turlayalım',
    },
  ];
  tik() {
    console.log(this.posts[0].imageUrl);
  }
}
