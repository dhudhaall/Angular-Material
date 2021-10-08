import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentDetailspopupsComponent } from './box-content-detailspopups.component';

describe('BoxContentDetailspopupsComponent', () => {
  let component: BoxContentDetailspopupsComponent;
  let fixture: ComponentFixture<BoxContentDetailspopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContentDetailspopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentDetailspopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
