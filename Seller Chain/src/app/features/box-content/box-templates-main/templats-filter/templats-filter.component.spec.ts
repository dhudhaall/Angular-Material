import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatsFilterComponent } from './templats-filter.component';

describe('TemplatsFilterComponent', () => {
  let component: TemplatsFilterComponent;
  let fixture: ComponentFixture<TemplatsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
