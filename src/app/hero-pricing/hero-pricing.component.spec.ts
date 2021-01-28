import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPricingComponent } from './hero-pricing.component';

describe('HeroPricingComponent', () => {
  let component: HeroPricingComponent;
  let fixture: ComponentFixture<HeroPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
