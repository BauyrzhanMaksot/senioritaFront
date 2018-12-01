import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverImageUpdateComponent } from './driver-image-update.component';

describe('DriverImageUpdateComponent', () => {
  let component: DriverImageUpdateComponent;
  let fixture: ComponentFixture<DriverImageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverImageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverImageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
