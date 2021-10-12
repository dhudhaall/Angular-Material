import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAddpopupComponent } from './box-addpopup.component';

describe('BoxAddpopupComponent', () => {
  let component: BoxAddpopupComponent;
  let fixture: ComponentFixture<BoxAddpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxAddpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAddpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
