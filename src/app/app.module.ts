import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter1Module } from './chapter1/chapter1.module'; //module import
import { Chapter2Module } from './chapter2/chapter2.module'; //module import
import { Chapter3Module } from './chapter3/chapter3.module'; //module import
import { Chapter4Module } from './chapter4/chapter4.module'; //module import
import { Chapter5Module } from './chapter5/chapter5.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'; //module import

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    Chapter1Module,
    Chapter2Module,
    Chapter3Module,
    Chapter4Module,
    Chapter5Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
