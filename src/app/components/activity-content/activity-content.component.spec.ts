import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityContentComponent } from './activity-content.component';

describe('ActivityContentComponent', () => {
  let component: ActivityContentComponent;
  let fixture: ComponentFixture<ActivityContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
