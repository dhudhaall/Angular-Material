import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoxFiltersComponent } from './single-box-filters.component';

describe('SingleBoxFiltersComponent', () => {
  let component: SingleBoxFiltersComponent;
  let fixture: ComponentFixture<SingleBoxFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBoxFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBoxFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
