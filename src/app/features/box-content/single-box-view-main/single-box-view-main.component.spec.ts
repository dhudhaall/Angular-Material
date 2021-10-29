import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoxViewMainComponent } from './single-box-view-main.component';

describe('SingleBoxViewMainComponent', () => {
  let component: SingleBoxViewMainComponent;
  let fixture: ComponentFixture<SingleBoxViewMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBoxViewMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBoxViewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
