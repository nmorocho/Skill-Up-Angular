import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarduserdetailComponent } from './carduserdetail.component';

describe('CarduserdetailComponent', () => {
  let component: CarduserdetailComponent;
  let fixture: ComponentFixture<CarduserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarduserdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarduserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
