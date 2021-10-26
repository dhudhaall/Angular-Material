import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddItemComponent } from './new-add-item.component';

describe('NewAddItemComponent', () => {
  let component: NewAddItemComponent;
  let fixture: ComponentFixture<NewAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
