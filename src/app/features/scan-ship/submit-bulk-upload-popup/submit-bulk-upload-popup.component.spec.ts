import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBulkUploadPopupComponent } from './submit-bulk-upload-popup.component';

describe('SubmitBulkUploadPopupComponent', () => {
  let component: SubmitBulkUploadPopupComponent;
  let fixture: ComponentFixture<SubmitBulkUploadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBulkUploadPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBulkUploadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
