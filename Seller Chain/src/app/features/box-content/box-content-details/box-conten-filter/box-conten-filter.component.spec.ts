import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContenFilterComponent } from './box-conten-filter.component';

describe('BoxContenFilterComponent', () => {
  let component: BoxContenFilterComponent;
  let fixture: ComponentFixture<BoxContenFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContenFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContenFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
