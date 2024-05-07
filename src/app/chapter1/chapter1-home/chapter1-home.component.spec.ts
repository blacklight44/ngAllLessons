import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1HomeComponent } from './chapter1-home.component';

describe('Chapter1HomeComponent', () => {
  let component: Chapter1HomeComponent;
  let fixture: ComponentFixture<Chapter1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter1HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
