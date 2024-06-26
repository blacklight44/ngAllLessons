import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css'],
  providers: [PhotoService],
})
export class DisplayphotoComponent implements OnInit {
  photoUrl: string = '';
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {}

  getImages() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      // console.log(this.photoUrl);
    });
  }
  onClick() {
    this.getImages();
  }
}
// import { Component, OnInit } from '@angular/core';
// import { PhotoService } from '../photo.service';

// @Component({
//   selector: 'app-displayphoto',
//   templateUrl: './displayphoto.component.html',
//   styleUrls: ['./displayphoto.component.css'],
// })
// export class DisplayphotoComponent implements OnInit {
//   photoUrl: string = '';
//   constructor(private photoService: PhotoService) {}

//   ngOnInit(): void {
//     this.getImages();
//   }

//   getImages() {
//     this.photoService.getPhotos().subscribe((response) => {
//       this.photoUrl = response.urls.regular;
//       //  console.log(this.photoUrl);
//     });
//   }

//   onClick() {
//     this.getImages();
//   }
// }
