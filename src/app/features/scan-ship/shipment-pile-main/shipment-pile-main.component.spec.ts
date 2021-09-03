import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPileMainComponent } from './shipment-pile-main.component';

describe('ShipmentPileMainComponent', () => {
  let component: ShipmentPileMainComponent;
  let fixture: ComponentFixture<ShipmentPileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentPileMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
