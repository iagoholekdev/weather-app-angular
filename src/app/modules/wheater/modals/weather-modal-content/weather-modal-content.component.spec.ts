import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherModalContentComponent } from './weather-modal-content.component';

describe('WeatherModalContentComponent', () => {
  let component: WeatherModalContentComponent;
  let fixture: ComponentFixture<WeatherModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherModalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
