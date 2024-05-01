import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingBarChartComponent } from './spending-bar-chart.component';

describe('SpendingBarChartComponent', () => {
  let component: SpendingBarChartComponent;
  let fixture: ComponentFixture<SpendingBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpendingBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpendingBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
