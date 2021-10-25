import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTaemplateComponent } from './box-taemplate.component';

describe('BoxTaemplateComponent', () => {
  let component: BoxTaemplateComponent;
  let fixture: ComponentFixture<BoxTaemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTaemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTaemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
