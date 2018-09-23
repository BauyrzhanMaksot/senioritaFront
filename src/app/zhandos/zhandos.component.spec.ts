import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhandosComponent } from './zhandos.component';

describe('ZhandosComponent', () => {
  let component: ZhandosComponent;
  let fixture: ComponentFixture<ZhandosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhandosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
