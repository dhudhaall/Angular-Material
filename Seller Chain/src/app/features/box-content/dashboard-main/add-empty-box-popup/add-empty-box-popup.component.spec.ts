import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmptyBoxPopupComponent } from './add-empty-box-popup.component';

describe('AddEmptyBoxPopupComponent', () => {
  let component: AddEmptyBoxPopupComponent;
  let fixture: ComponentFixture<AddEmptyBoxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmptyBoxPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmptyBoxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
