import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddItemFiltersComponent } from './new-add-item-filters.component';

describe('NewAddItemFiltersComponent', () => {
  let component: NewAddItemFiltersComponent;
  let fixture: ComponentFixture<NewAddItemFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAddItemFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddItemFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
