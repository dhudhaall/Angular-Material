import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanshipDashbordMainComponent } from './scanship-dashbord-main.component';

describe('ScanshipDashbordMainComponent', () => {
  let component: ScanshipDashbordMainComponent;
  let fixture: ComponentFixture<ScanshipDashbordMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanshipDashbordMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanshipDashbordMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
