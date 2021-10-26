import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentListingComponent } from './shipment-listing.component';

describe('ShipmentListingComponent', () => {
  let component: ShipmentListingComponent;
  let fixture: ComponentFixture<ShipmentListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
