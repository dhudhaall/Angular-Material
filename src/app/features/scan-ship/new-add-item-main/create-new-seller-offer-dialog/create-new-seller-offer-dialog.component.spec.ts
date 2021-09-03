import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSellerOfferDialogComponent } from './create-new-seller-offer-dialog.component';

describe('CreateNewSellerOfferDialogComponent', () => {
  let component: CreateNewSellerOfferDialogComponent;
  let fixture: ComponentFixture<CreateNewSellerOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSellerOfferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSellerOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
