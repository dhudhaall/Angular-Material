import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentPopupsComponent } from './box-content-popups.component';

describe('BoxContentPopupsComponent', () => {
  let component: BoxContentPopupsComponent;
  let fixture: ComponentFixture<BoxContentPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
