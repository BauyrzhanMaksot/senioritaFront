import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientImageUpdateComponent } from './client-image-update.component';

describe('ClientImageUpdateComponent', () => {
  let component: ClientImageUpdateComponent;
  let fixture: ComponentFixture<ClientImageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientImageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientImageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
