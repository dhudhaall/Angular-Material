import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDetailsMainComponent } from './box-content-details-main.component';

describe('BoxContentDetailsMainComponent', () => {
  let component: BoxContentDetailsMainComponent;
  let fixture: ComponentFixture<BoxContentDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
