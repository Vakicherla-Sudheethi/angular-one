import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutstomerDashboardComponent } from './cutstomer-dashboard.component';

describe('CutstomerDashboardComponent', () => {
  let component: CutstomerDashboardComponent;
  let fixture: ComponentFixture<CutstomerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutstomerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutstomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
