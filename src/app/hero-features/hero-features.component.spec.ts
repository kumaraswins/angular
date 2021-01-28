import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeaturesComponent } from './hero-features.component';

describe('HeroFeaturesComponent', () => {
  let component: HeroFeaturesComponent;
  let fixture: ComponentFixture<HeroFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
