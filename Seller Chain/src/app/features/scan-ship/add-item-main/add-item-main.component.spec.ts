import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemMainComponent } from './add-item-main.component';

describe('AddItemMainComponent', () => {
  let component: AddItemMainComponent;
  let fixture: ComponentFixture<AddItemMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
