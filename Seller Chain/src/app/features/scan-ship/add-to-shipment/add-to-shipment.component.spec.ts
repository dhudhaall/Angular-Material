import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToShipmentComponent } from './add-to-shipment.component';

describe('AddToShipmentComponent', () => {
  let component: AddToShipmentComponent;
  let fixture: ComponentFixture<AddToShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
