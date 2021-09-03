import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddItemMainComponent } from './new-add-item-main.component';

describe('NewAddItemMainComponent', () => {
  let component: NewAddItemMainComponent;
  let fixture: ComponentFixture<NewAddItemMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAddItemMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
