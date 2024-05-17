import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter9HomeComponent } from './chapter9-home.component';

describe('Chapter9HomeComponent', () => {
  let component: Chapter9HomeComponent;
  let fixture: ComponentFixture<Chapter9HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter9HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter9HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
