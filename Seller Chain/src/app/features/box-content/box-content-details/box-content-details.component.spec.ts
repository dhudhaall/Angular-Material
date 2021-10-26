import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDetailsComponent } from './box-content-details.component';

describe('BoxContentDetailsComponent', () => {
  let component: BoxContentDetailsComponent;
  let fixture: ComponentFixture<BoxContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
