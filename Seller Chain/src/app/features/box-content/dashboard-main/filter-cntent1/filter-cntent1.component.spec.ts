import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCntent1Component } from './filter-cntent1.component';

describe('FilterCntent1Component', () => {
  let component: FilterCntent1Component;
  let fixture: ComponentFixture<FilterCntent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCntent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCntent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
