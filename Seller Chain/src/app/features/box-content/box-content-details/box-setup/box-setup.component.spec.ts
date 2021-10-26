import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSetupComponent } from './box-setup.component';

describe('BoxSetupComponent', () => {
  let component: BoxSetupComponent;
  let fixture: ComponentFixture<BoxSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
