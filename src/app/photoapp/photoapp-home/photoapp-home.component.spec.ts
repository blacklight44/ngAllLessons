import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoappHomeComponent } from './photoapp-home.component';

describe('PhotoappHomeComponent', () => {
  let component: PhotoappHomeComponent;
  let fixture: ComponentFixture<PhotoappHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoappHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoappHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
