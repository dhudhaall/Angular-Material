import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTemplateMainComponent } from './box-template-main.component';

describe('BoxTemplateMainComponent', () => {
  let component: BoxTemplateMainComponent;
  let fixture: ComponentFixture<BoxTemplateMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTemplateMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
