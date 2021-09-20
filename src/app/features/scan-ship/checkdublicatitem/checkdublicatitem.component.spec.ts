import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdublicatitemComponent } from './checkdublicatitem.component';

describe('CheckdublicatitemComponent', () => {
  let component: CheckdublicatitemComponent;
  let fixture: ComponentFixture<CheckdublicatitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdublicatitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdublicatitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
