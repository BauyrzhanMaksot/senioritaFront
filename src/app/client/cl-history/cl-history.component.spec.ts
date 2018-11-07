import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClHistoryComponent } from './cl-history.component';

describe('ClHistoryComponent', () => {
  let component: ClHistoryComponent;
  let fixture: ComponentFixture<ClHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
