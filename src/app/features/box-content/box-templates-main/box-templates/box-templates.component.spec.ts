import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTemplatesComponent } from './box-templates.component';

describe('BoxTemplatesComponent', () => {
  let component: BoxTemplatesComponent;
  let fixture: ComponentFixture<BoxTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
