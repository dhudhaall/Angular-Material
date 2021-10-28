import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiFestPopupComponent } from './mani-fest-popup.component';

describe('ManiFestPopupComponent', () => {
  let component: ManiFestPopupComponent;
  let fixture: ComponentFixture<ManiFestPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManiFestPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManiFestPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
