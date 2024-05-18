import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { EqualityValidators } from '../equality-validators';
import { delay, filter, scan } from 'rxjs';
@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css'],
})
export class EqualityComponent implements OnInit {
  seconds = 0;
  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber: new FormControl(this.generateNumber()),
      answer: new FormControl(''),
    },
    //tüm formu kontrol edeceğimizden validasyonu burda yapıyoruz
    [
      // (form: AbstractControl) => {
      //   //custom validatör AbstractControl den türetiliyordu burdada form un classı bu olmalı
      //   console.log(form.value);
      //   const { firstNumber, secondNumber, answer } = form.value;// form.value.firstNumber...
      //   if (firstNumber + secondNumber === parseInt(answer)) {
      //     return null;
      //   }
      //   //return null; // Form valid mi true
      //   //return {required: true} //Form valid mi false, form hataları: {required: true}
      //   return { addition: true };
      // },

      //custom validatör
      //EqualityValidators.addition //argumansız
      EqualityValidators.addition('answer', 'firstNumber', 'secondNumber'),
    ]
  );
  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }
  generateNumber() {
    return Math.floor(Math.random() * 10);
  }
  constructor() {}

  ngOnInit(): void {
    // const startTime = new Date();
    // let numberSolved = 0;

    //EventEmitter_ {closed: false, observers: Array(0), isStopped: false, hasError: false, thrownError: null, …}
    //console.log(this.mathForm.statusChanges);

    // this.mathForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // }); //VALİD İNVAİD Formun statusun a bakıyor

    // this.mathForm.statusChanges.subscribe((value) => {
    //   if (value === 'INVALID') {
    //     return;
    //   }
    //   this.mathForm.patchValue({
    //     //setValue yerine girildiğinde tüm değerleri güncellememiz gerekmez
    //     //firstNumber: this.generateNumber(),
    //     secondNumber: this.generateNumber(),
    //     answer: '',
    //   });
    // });

    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'), //form valid ise işlem devam eder
        delay(800), //girdiğimiz sayıyı görmek için
        scan(
          //js de reduce benzeri
          (acc) => {
            //(acc,value) değerlerini alır bize sadece artırma değeri lazım
            return {
              numberSolved: acc.numberSolved + 1, //filtere uyan her işlem için değer 1 artar
              startTime: acc.startTime, //her işlem sonunda starttima new Date() atanır
            };
          },
          { numberSolved: 0, startTime: new Date() } //başlangıç değer ataması yapılıyor
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        //scandan gelen değerler alınıp hesaplama yapılır
        // numberSolved++;
        this.seconds =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          firstNumber: this.generateNumber(),
          secondNumber: this.generateNumber(),
          answer: '',
        });
      });
  }
}
