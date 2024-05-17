import { Component, OnInit } from '@angular/core';
// import {
//   Observable,
//   Subscriber,
//   of,
//   from,
//   fromEvent,
//   timer,
//   interval,
//   forkJoin,
//   merge,
//   concat,
//   combineLatest,
//   Subject,
//   BehaviorSubject,
//   AsyncSubject,
//   ReplaySubject,
// } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import {
//   mapTo,
//   filter,
//   map,
//   tap,
//   debounceTime,
//   skip,
//   skipWhile,
//   take,
//   takeLast,
//   takeWhile,
//   first,
//   last,
//   distinct,
//   concatMap,
//   startWith,
//   endWith,
// } from 'rxjs/operators';
import '@angular/compiler';
@Component({
  selector: 'app-chapter9-home',
  templateUrl: './chapter9-home.component.html',
  styleUrls: ['./chapter9-home.component.css'],
})
export class Chapter9HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // fromE() {
  //   // const saveClick$ = new Observable<MouseEvent>((subscriber) => {
  //   //   const clickHandler = (event as MouseEvent) => {
  //   // // sürekli sayfa yüklenerek(execution context yaratılarak) eventler dinlenir
  //   //     console.log('Can');
  //   //     subscriber.next(event as MouseEvent);
  //   //   };
  //   //   saveButton.addEventListener('click', clickHandler);
  //   //   return () => {
  //   // //dinleme bittikten sonra execution context yaratımı durması için teardown çalıştırılır
  //   //     saveButton.removeEventListener('click', clickHandler);
  //   //   };
  //   // });
  //   // const subscription = saveClick$.subscribe((event) =>
  //   //   console.log(event.type, event.x, event.y)
  //   // );
  //   // setTimeout(() => {
  //   //   console.log('Unsubsribe');
  //   //   subscription.unsubscribe();
  //   // }, 5000);}
  // }
}
//https://thrkardak.medium.com/rxjs-yak%C4%B1ndan-bak%C4%B1%C5%9F-1-observables-807c59d3dad9
//*******************************************

// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable çalıştı');
//   subscriber.next('Can');
//   setTimeout(() => subscriber.next('Osman'), 1000);
//   setTimeout(() => subscriber.next('Tuba'), 3000);
// });

// console.log('Subscription 1 başladı');
// observable$.subscribe((value) => console.log('Subscription 1:', value));

// setTimeout(() => {
//   console.log('Subscription 2 başladı');
//   observable$.subscribe((value) => console.log('Subscription 2:', value));
// }, 2000);

//*******************************************TEARDOWN

// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable çalıştı');
//   subscriber.next('Can');
//   subscriber.next('Hakan');
//   setTimeout(() => {
//     subscriber.next('Osman');
//     subscriber.complete();
//   }, 2000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Subscribe olmadan Önce');
// observable$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });
// console.log('Subscribe olduktan sonra');

//******************************************* 11ERROR
// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable çalıştı');
//   subscriber.next('Can');
//   subscriber.next('Hakan');
//   setTimeout(() => {
//     subscriber.next('Osman');
//   }, 2000);

//   setTimeout(() => {
//     subscriber.error(new Error('Hata Aldık'));
//   }, 4000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Subscribe olmadan Önce');
// observable$.subscribe({
//   next: (value) => console.log(value),
//   error: (can) => console.log(can.message),
//   complete: () => console.log('Completed'),
// });
// console.log('Subscribe olduktan sonra');

//******************************************* 12-Error() ve Complete() Beraber
// const observable$ = new Observable<string>((subscriber) => {
//   console.log('Observable çalıştı');
//   subscriber.next('Can');
//   subscriber.next('Hakan');

//   setTimeout(() => {
//     subscriber.error(new Error('Hata Aldık'));
//   }, 2000);

//   setTimeout(() => {
//     subscriber.next('Osman');
//     subscriber.complete();
//   }, 4000);

//   return () => {
//     console.log('Teardown');
//   };
// });

// console.log('Subscribe olmadan Önce');
// observable$.subscribe({
//   next: (value) => console.log(value),
//   error: (can) => console.log(can.message),
//   complete: () => console.log('Completed'),
// });
// console.log('Subscribe olduktan sonra');

//*******************************************13-Unsubscribe ve Teardown Logic
// const interval$ = new Observable<number>((subscriber) => {
//   let sayac = 1;
//   const intervalId = setInterval(() => {
//     console.log('Sayı', sayac);
//     subscriber.next(sayac++);
//   }, 1000);

//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe((value) => console.log(value));

// setTimeout(() => {
//   console.log('Bitir');
//   subscription.unsubscribe();
// }, 5000);
//*******************************************14-Cold Observable
// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe((data) => console.log('Sub 1:', data.response.first_name));

// ajax$.subscribe((data) => console.log('Sub 2:', data.response.first_name));

// ajax$.subscribe((data) => console.log('Sub 3:', data.response.first_name));
// //******************************************* 15- Hot Observable
// const helloButton = document.querySelector('button#hello');

// const helloClick$ = new Observable<MouseEvent>((subscriber) =>
//   helloButton.addEventListener('click', (event) => {
//     subscriber.next(event as MouseEvent);
//   })
// );

// helloClick$.subscribe((event) =>
//   console.log('Sub 1:', event.type, event.x, event.y)
// );

// helloClick$.subscribe((event) =>
//   console.log('Sub 2:', event.type, event.x, event.y)
// );
//******************************************* 16 of
// of(10, 20, 30).subscribe({
//   // of direk observable oluşturur değerler next ile emit edilir
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });
//*******************************************17-From
//Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
// from(['Can', 'Osman', 'Hakan']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// from([10, 20, 30]).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });
// const array = [10, 20, 30];
// const result = from(array);
// result.subscribe((x) => console.log(x));

// const somePromise = new Promise((resolve, reject) => {
//   // resolve('Kabul edildi!');
//   reject('Reddedildi!');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: (value) => console.log(value), //10 20 30
//   error: (err) => console.log('Error', err), //reddedildi
//   complete: () => console.log('Completed!'), //resolve olsa çalışacaktı
// });

//*******************************************18-FromEvent

// const saveButton = document.querySelector('button#can');
// const subscription = fromEvent<MouseEvent>(saveButton, 'click').subscribe(
//   (event) => console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubsribe');
//   subscription.unsubscribe();
// }, 5000);

// const saveClick$ = new Observable<MouseEvent>((subscriber) => {
//   const clickHandler = (event) => {
// // sürekli sayfa yüklenerek(execution context yaratılarak) eventler dinlenir
//     console.log('Can');
//     subscriber.next(event as MouseEvent);
//   };
//   saveButton.addEventListener('click', clickHandler);

//   return () => {
////dinleme bittikten sonra execution context yaratımı durması için teardown çalıştırılır
//     saveButton.removeEventListener('click', clickHandler);
//   };
// });

// const subscription = saveClick$.subscribe((event) =>
//   console.log(event.type, event.x, event.y)
// );

// setTimeout(() => {
//   console.log('Unsubsribe');
//   subscription.unsubscribe();
// }, 5000);

//*******************************************19-Timer
//belirli bir zaman sonra observable a girmesini sağlar
//default olarak 0 değerini dönderir
// console.log('Uygulama Başladı');

// const subscription = timer(2000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 3000);
//******************************************* 20-interval
//belirtilen zaman aralığınca çalışır default 0,1,2 basar
// console.log('Uygulama Başladı');

// const subscription = interval(2000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
//   console.log('Unsubscribe');
// }, 7000);

/******************************BİRLEŞTİRME*************************** */
//*******************************************22-forkJoın ORN

// const can$ = new Observable((subscriber) => {
//   setTimeout(() => {
//     subscriber.next('Can');
//     subscriber.complete();
//   }, 3000);
// });

// const canan$ = new Observable((subscriber) => {
//   setTimeout(() => {
//     subscriber.error('Failure!');
//   }, 5000);
// });
//ÇIKTI Error failure her ikiside bittikten sonra birleştirildiğinde error olduğundan complatedı görmediğinden error olmayan değerde emit edilmez
// forkJoin([can$, canan$]).subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log('Error', err),
// });

//*******************************************21-forkJoın

//ÇALIŞMASI İÇİN İÇERİSİNDEKİ TÜM OBSERVABLELERİN BİTMİŞ OLMASI GEREKİR
//SON DEĞERİ EMİT EDER

// // const observable = forkJoin({
// //   foo: of(1, 2, 3, 4),
// //   bar: Promise.resolve(8),
// //   baz: timer(4000),
// // });
// // observable.subscribe({
// //   next: (value) => console.log(value),
// //   complete: () => console.log('This is how it ends!'),
// // });

// const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

// const randomNation$ = ajax(
//   'https://random-data-api.com/api/nation/random_nation'
// );

// const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// // randomName$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['first_name']
// // )

// // randomName$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['first_name'])
// // );
// // randomNation$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['capital'])
// // );
// // randomFood$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['dish'])
// // );

// forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
//   ([randomName, randomNation, randomFood]) =>
//     console.log(`${randomNation.response['capital']} da yaşayan
//   ${randomName.response['first_name']}
//   ${randomFood.response['dish']} yemeyi çok sever
//   `)
// );

//******************************************* concat
//İNTERVAL sürekli çalışacağından ikinci observableyi birleştirmeye sıra gelmez
// concat(interval(1000), of('This', 'Never', 'Runs')).subscribe(console.log);

// concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
//******************************************* merge

// //emit every 2.5 seconds
// const first = interval(2500);
// //emit every 2 seconds
// const second = interval(2000);
// //emit every 1.5 seconds
// const third = interval(1500);
// //emit every 1 second
// const fourth = interval(1000);

// //emit outputs from one observable
// const example = merge(
//   first.pipe(mapTo('FIRST!')),
//   second.pipe(mapTo('SECOND!')),
//   third.pipe(mapTo('THIRD')),
//   fourth.pipe(mapTo('FOURTH'))
// );
// //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
// const subscribe = example.subscribe((val) => console.log(val));

//Concat gibi bunu direk basar
// let list1 = of(1, 2, 3, 4, 5);
// let list2 = of(4, 5, 6, 7, 8, 9, 10);
// let final_val = merge(list1, list2);
// final_val.subscribe((x) => console.log(x));
//*******************************************-StartWith - EndWith
// // const source = of(1, 2, 3);

// // const example = source.pipe(endWith(4));

// // const subscribe = example.subscribe((val) => console.log(val));

// const source$ = of('Can', 'Tuba', 'Osman');

// source$.pipe(startWith('İlayda')).subscribe((val) => console.log(val));
//*******************************************23-combineLatest
// //çalışmak için tüm observable değerlerin tamamlanmasını bekler.
// //belli bir hesaplama için tüm değerlerin girilmesini beklemek için kullanırız
// const temperature = document.getElementById('temperature-input');
// const conversion = document.getElementById('conversion-dropdown');
// const resultText = document.getElementById('result-text');

// const temperatureEvent$ = fromEvent(temperature, 'input');
// const conversionEvent$ = fromEvent(conversion, 'input');

// combineLatest([temperatureEvent$, conversionEvent$]).subscribe(
//   ([temperatureEvent, conversionEvent]) => {
//     // console.log(
//     //   temperatureEvent.target['value'],
//     //   conversionEvent.target['value']
//     // );

//     const temperature = Number(temperatureEvent.target['value']);//number casting
//     const conversion = conversionEvent.target['value'];

//     let result: number;
//     if (conversion === 'f-to-c') {
//       result = ((temperature - 32) * 5) / 9;
//     } else if (conversion === 'c-to-f') {
//       result = (temperature * 9) / 5 + 32;
//     }

//     resultText.innerHTML = String(result);//string cast
//   }
// );

//*******************************************

//*******************************************
//******************************PİPLE OPERATORS***************************
//input olarak observable alır ve içerisne tanımlı rxjs operatörleri yardımıyla yeni bir observable yaratır.
//*******************************************
//*******************************************25-Filter

// const source = from([1, 2, 3, 4, 5]);

// const example = source.pipe(filter((num) => num % 2 === 1));
// example.subscribe((val) => console.log(`Tek sayılar: ${val}`));

// const source = from([
//   { name: 'Can', age: 29 },
//   { name: 'Tuba', age: 27 },
// ]);

// const example = this.source.pipe(filter((person) => person.age >= 28));

// example.subscribe((person) =>
//   console.log(`28 yaşından büyük olanlar: ${person.name}`)
// );
//*******************************************26-Map

// // const source = from([1, 2, 3, 4, 5]);

// // const example = source.pipe(map((val) => val + 5));

// // example.subscribe((val) => console.log(val));

// const randomName$ = ajax(
//   'https://random-data-api.com/api/name/random_name'
// ).pipe(map((ajaxResponse) => ajaxResponse.response['first_name']));

// const randomNation$ = ajax(
//   'https://random-data-api.com/api/nation/random_nation'
// ).pipe(map((ajaxResponse) => ajaxResponse.response['capital']));

// const randomFood$ = ajax(
//   'https://random-data-api.com/api/food/random_food'
// ).pipe(map((ajaxResponse) => ajaxResponse.response['dish']));

// // randomName$.subscribe((can) => console.log(can));
// // randomNation$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['capital'])
// // );
// // randomFood$.subscribe((ajaxResponse) =>
// //   console.log(ajaxResponse.response['dish'])
// // );

// forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
//   ([randomName, randomNation, randomFood]) =>
//     console.log(`${randomNation} da yaşayan
//   ${randomName}
//   ${randomFood} yemeyi çok sever
//   `)
// );

//*******************************************27-Tap
// //diğer operatörlerden önceki sonraki değerlerini tutmak için debugur olarak kullanılır
// const source = of(1, 2, 3, 4, 5);
// const example = source.pipe(
//   map((val) => val + 10),
//   tap((val) => console.log(`BEFORE MAP: ${val}`)),
//   filter((val) => val > 13),
//   tap((val) => console.log(`AFTER MAP: ${val}`))
// );
// const subscribe = example.subscribe((val) => console.log(val));
//*******************************************28-DebounceTime
//
// const searchBox = document.getElementById('search');

// const keyup$ = fromEvent(searchBox, 'keyup');

// keyup$
//   .pipe(
//     map((i: any) => i.currentTarget.value),
//     debounceTime(2000)//2 sn erteleyip yeni obsr e atar yeni değer= 2sn+eskideğer
//   )
//   .subscribe(console.log);
//*******************************************28-DebounceTimeOrnek2
// const sliderInput = document.querySelector('input#slider');

// fromEvent(sliderInput, 'input')
//   .pipe(
//     map((event) => event.target['value']),
//     debounceTime(2000)
//   )
//   .subscribe((value) => console.log(value));
//*******************************************29-Skip

// const source = interval(1000);

// const example = source.pipe(skip(4));//ilk 4 değeri(0,1,2,3) atlar

// example.subscribe((val) => console.log(val));

//*******************************************29-Skip Örnek2
// const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // numArrayObs.pipe(skip(2)).subscribe(console.log);

// numArrayObs
//   .pipe(filter((val, index) => index > 2))
//   .subscribe((val) => console.log(val));

//*******************************************30-SkipWhile
// const source = interval(1000);

// const example = source.pipe(skipWhile((val) => val < 5));//koşul doğru oldukça atlar 0,1,2,3,4

// example.subscribe((val) => console.log(val));

//*******************************************31-Take
// //skip in tersi yazılan değeri geçmek yerine alır
// const source = of(1, 2, 3, 4, 5);

// const example = source.pipe(take(3));

// example.subscribe((val) => console.log(val));
//*******************************************32-TakeLast
// //sondan alır
// const source = of('Hasan', 'Osman', 'Can', 'Tuba!');

// const example = source.pipe(takeLast(3));
// example.subscribe((val) => console.log(val));

//*******************************************33-TakeWhile
//koşul sağlandıkça alır
// const source = of(1, 2, 3, 4, 5);

// source.pipe(takeWhile((val) => val < 4)).subscribe((val) => console.log(val));
//*******************************************34-First-Last
// //first il değeri last son değeri emit eder
// const source = from([1, 2, 3, 4, 5]);

// // const example = source.pipe(first());

// const example = source.pipe(last());

// example.subscribe((val) => console.log(val));

//*******************************************35-Distinct
//önceki obsr dan emit edilen değerlerden aynıları atar
// // of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
// //   .pipe(distinct())
// //   .subscribe((val) => console.log(val));

// const obj1 = { id: 3, name: 'name 1' };
// const obj2 = { id: 4, name: 'name 2' };
// const obj3 = { id: 3, name: 'name 3' };
// const vals = [obj1, obj2, obj3];

// from(vals)
//   .pipe(distinct((e) => e.id))
//   .subscribe((val) => console.log(val));

//*******************************************36-ConcatMap
//Her emit edilen değerde yeni obsr oluşturulup atanır
// const clicks = fromEvent(document, 'click');
// //clic her çalıştığında sn de bir artar ilk dört değeri al dediğimizde 0,1,2,3
// const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
// result.subscribe((x) => console.log(x));

// // const source$ = new Observable((subscriber) => {
// //   setTimeout(() => subscriber.next('Can'), 2000);
// //   setTimeout(() => subscriber.next('Canan'), 4000);
// // });

// // source$
// //   .pipe(concatMap((value) => of(1, 2))) // can için 2 sn sonra  canan için ise 4 sn sonra 1,2 değerini bastı
// //   .subscribe((value) => console.log(value));

//*******************************************switchMap
//https://stackoverflow.com/questions/49698640/flatmap-mergemap-switchmap-and-concatmap-in-rxjs
//concatta her emit edilen değerden sonra yeni bir obsr yaratılırken switch de emit edilen son değere geçilir
// flatMap/mergeMap - creates an Observable immediately for any source item, all previous Observables are kept alive. Note flatMap is an alias for mergeMap and flatMap will be removed in RxJS 8.
// concatMap - waits for the previous Observable to complete before creating the next one
// switchMap - for any source item, completes the previous Observable and immediately creates the next one
// exhaustMap - source items are ignored while the previous Observable is not completed

//******************************SUBJECTS***************************

//*******************************************38-Subject
// const sub = new Subject();
// //subscribe olduktan sonrakileri basar
// sub.subscribe((x) => {
//   console.log('Subscriber A', x);//1,2,3
// });
// sub.next(1);
// sub.next(2);
// sub.subscribe((x) => {
//   console.log('Subscriber B', x);//3
// });
// sub.next(3);

//*******************************************39-Behaviour Subject
// // const sub = new BehaviorSubject(0);
// // sub.next(1);
// // sub.subscribe((x) => {
// //   console.log('Subscriber A', x);//1,2,3
// // });

// // sub.next(2);
// // sub.subscribe((x) => {
// //   console.log('Subscriber B', x);//2,3
// // });
// // sub.next(3);
// const subject = new BehaviorSubject(123);

// subject.subscribe(console.log);//123,456,789
// subject.subscribe(console.log);//123,456,789

// subject.next(456);

// subject.subscribe(console.log);//456,789

// subject.next(789);
// //çıktı 123,123,456,456,456,789,789,789
//*******************************************40-Async Subject
// //enson hangi değer emit edildiyse o değer gönderilir
// const sub = new AsyncSubject();

// sub.subscribe(console.log);//456

// sub.next(123);
//// sub.complete() deseydik çıktı 123,123
// sub.subscribe(console.log);//456

// sub.next(456);
// sub.complete();//diğerlerinden farklı olarak ccomplate kullanılır
// //çıktı 456,456

//*******************************************41-Replay Subject
//Kendisinden önce kaç değer emit edilmek isteniyorsa belirtilir
// const sub = new ReplaySubject(3);

// sub.next(1);
// sub.next(2);
// sub.subscribe(console.log); //1,2,3,4,5
// sub.next(3);
// sub.next(4);
// sub.subscribe(console.log); //2,3,4,5
// sub.next(5);
//çıktı 1,2,3,4--2,3,4--5,5
//*******************************************

//*******************************************

//*******************************************
