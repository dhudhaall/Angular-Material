import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTemplatesMainComponent } from './box-templates-main.component';

describe('BoxTemplatesMainComponent', () => {
  let component: BoxTemplatesMainComponent;
  let fixture: ComponentFixture<BoxTemplatesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTemplatesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTemplatesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
