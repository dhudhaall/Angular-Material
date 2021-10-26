import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFiltersComponent } from './shipment-filters.component';

describe('ShipmentFiltersComponent', () => {
  let component: ShipmentFiltersComponent;
  let fixture: ComponentFixture<ShipmentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
