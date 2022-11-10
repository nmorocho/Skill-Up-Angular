import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountslistComponent } from './myaccountslist.component';

describe('MyaccountslistComponent', () => {
  let component: MyaccountslistComponent;
  let fixture: ComponentFixture<MyaccountslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaccountslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyaccountslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
