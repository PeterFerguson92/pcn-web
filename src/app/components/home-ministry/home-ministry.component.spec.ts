import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMinistryComponent } from './home-ministry.component';

describe('HomeMinistryComponent', () => {
  let component: HomeMinistryComponent;
  let fixture: ComponentFixture<HomeMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMinistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
