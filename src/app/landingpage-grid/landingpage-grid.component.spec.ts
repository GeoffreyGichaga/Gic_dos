import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageGridComponent } from './landingpage-grid.component';

describe('LandingpageGridComponent', () => {
  let component: LandingpageGridComponent;
  let fixture: ComponentFixture<LandingpageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
