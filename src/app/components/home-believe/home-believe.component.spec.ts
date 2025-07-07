import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBelieveComponent } from './home-believe.component';

describe('HomeBelieveComponent', () => {
  let component: HomeBelieveComponent;
  let fixture: ComponentFixture<HomeBelieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBelieveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
