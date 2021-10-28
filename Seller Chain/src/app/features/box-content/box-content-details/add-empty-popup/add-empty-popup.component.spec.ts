import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmptyPopupComponent } from './add-empty-popup.component';

describe('AddEmptyPopupComponent', () => {
  let component: AddEmptyPopupComponent;
  let fixture: ComponentFixture<AddEmptyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmptyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmptyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
