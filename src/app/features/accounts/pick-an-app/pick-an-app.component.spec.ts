import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAnAppComponent } from './pick-an-app.component';

describe('PickAnAppComponent', () => {
  let component: PickAnAppComponent;
  let fixture: ComponentFixture<PickAnAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAnAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickAnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
