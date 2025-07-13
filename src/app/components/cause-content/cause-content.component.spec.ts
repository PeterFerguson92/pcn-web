import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseContentComponent } from './cause-content.component';

describe('CauseContentComponent', () => {
  let component: CauseContentComponent;
  let fixture: ComponentFixture<CauseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CauseContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CauseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
