import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCausesComponent } from './home-causes.component';

describe('HomeCausesComponent', () => {
  let component: HomeCausesComponent;
  let fixture: ComponentFixture<HomeCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCausesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
