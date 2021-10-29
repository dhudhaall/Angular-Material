import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoxViewComponent } from './single-box-view.component';

describe('SingleBoxViewComponent', () => {
  let component: SingleBoxViewComponent;
  let fixture: ComponentFixture<SingleBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBoxViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
