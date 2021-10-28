import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDetailsMainComponent } from './shipment-details-main.component';

describe('ShipmentDetailsMainComponent', () => {
  let component: ShipmentDetailsMainComponent;
  let fixture: ComponentFixture<ShipmentDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
