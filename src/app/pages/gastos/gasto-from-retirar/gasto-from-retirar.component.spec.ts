import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoFromRetirarComponent } from './gasto-from-retirar.component';

describe('GastoFromRetirarComponent', () => {
  let component: GastoFromRetirarComponent;
  let fixture: ComponentFixture<GastoFromRetirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoFromRetirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoFromRetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
