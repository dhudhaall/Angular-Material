import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFiltersComponent } from './add-item-filters.component';

describe('AddItemFiltersComponent', () => {
  let component: AddItemFiltersComponent;
  let fixture: ComponentFixture<AddItemFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
