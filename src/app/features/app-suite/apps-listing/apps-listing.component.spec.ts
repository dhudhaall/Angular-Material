import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsListingComponent } from './apps-listing.component';

describe('AppsListingComponent', () => {
  let component: AppsListingComponent;
  let fixture: ComponentFixture<AppsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
