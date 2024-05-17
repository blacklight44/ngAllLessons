import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

interface CallResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<CallResponse> {
    const url = 'https://api.unsplash.com/photos/random';
    const headers = {
      Authorization: 'Client-ID mBC7ctPh59EZNRmAn0cSeEHLVX1geQROx_Wdt9a--Ak',
    };
    return this.http.get<CallResponse>(url, { headers });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface CallResponse {
//   urls: {
//     regular: string;
//   };
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class PhotoService {
//   constructor(private http: HttpClient) {}

//   getPhotos() {
//     return this.http.get<CallResponse>(
//       'https://api.unsplash.com/photos/random',
//       {
//         headers: {
//           Authorization:
//             'Client-ID mBC7ctPh59EZNRmAn0cSeEHLVX1geQROx_Wdt9a--Ak',
//         },
//       }
//     );
//   }
// }
