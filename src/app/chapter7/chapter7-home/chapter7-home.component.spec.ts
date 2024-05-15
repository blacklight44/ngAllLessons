import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter7HomeComponent } from './chapter7-home.component';

describe('Chapter7HomeComponent', () => {
  let component: Chapter7HomeComponent;
  let fixture: ComponentFixture<Chapter7HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter7HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter7HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
