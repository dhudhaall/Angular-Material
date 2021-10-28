import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkItemDetailComponent } from './bulk-item-detail.component';

describe('BulkItemDetailComponent', () => {
  let component: BulkItemDetailComponent;
  let fixture: ComponentFixture<BulkItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
