import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelItmeComponent } from './hotel-item.component';

describe('HotelItmeComponent', () => {
  let component: HotelItmeComponent;
  let fixture: ComponentFixture<HotelItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
