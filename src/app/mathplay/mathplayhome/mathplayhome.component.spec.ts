import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathplayhomeComponent } from './mathplayhome.component';

describe('MathplayhomeComponent', () => {
  let component: MathplayhomeComponent;
  let fixture: ComponentFixture<MathplayhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathplayhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathplayhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
