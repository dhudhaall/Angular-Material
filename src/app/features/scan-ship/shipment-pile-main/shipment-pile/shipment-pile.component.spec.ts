import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPileComponent } from './shipment-pile.component';

describe('ShipmentPileComponent', () => {
  let component: ShipmentPileComponent;
  let fixture: ComponentFixture<ShipmentPileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentPileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
