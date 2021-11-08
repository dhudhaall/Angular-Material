import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDetailComponent } from './box-content-detail.component';

describe('BoxContentDetailComponent', () => {
  let component: BoxContentDetailComponent;
  let fixture: ComponentFixture<BoxContentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
