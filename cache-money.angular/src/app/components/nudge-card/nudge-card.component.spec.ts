import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudgeCardComponent } from './nudge-card.component';

describe('NudgeCardComponent', () => {
  let component: NudgeCardComponent;
  let fixture: ComponentFixture<NudgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NudgeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NudgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
