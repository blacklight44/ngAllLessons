import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4HomeComponent } from './chapter4-home.component';

describe('Chapter4HomeComponent', () => {
  let component: Chapter4HomeComponent;
  let fixture: ComponentFixture<Chapter4HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter4HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
