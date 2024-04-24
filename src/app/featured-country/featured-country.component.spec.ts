import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCountryComponent } from './featured-country.component';

describe('FeaturedCountryComponent', () => {
  let component: FeaturedCountryComponent;
  let fixture: ComponentFixture<FeaturedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
