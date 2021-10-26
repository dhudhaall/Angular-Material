import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPileFiltersComponent } from './shipment-pile-filters.component';

describe('ShipmentPileFiltersComponent', () => {
  let component: ShipmentPileFiltersComponent;
  let fixture: ComponentFixture<ShipmentPileFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentPileFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentPileFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
