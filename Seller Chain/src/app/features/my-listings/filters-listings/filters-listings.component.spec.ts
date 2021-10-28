import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersListingsComponent } from './filters-listings.component';

describe('FiltersListingsComponent', () => {
  let component: FiltersListingsComponent;
  let fixture: ComponentFixture<FiltersListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
