import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryContentComponent } from './ministry-content.component';

describe('MinistryContentComponent', () => {
  let component: MinistryContentComponent;
  let fixture: ComponentFixture<MinistryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinistryContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinistryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
