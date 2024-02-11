import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByTitleComponent } from './get-book-by-title.component';

describe('GetBookByTitleComponent', () => {
  let component: GetBookByTitleComponent;
  let fixture: ComponentFixture<GetBookByTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBookByTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBookByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
