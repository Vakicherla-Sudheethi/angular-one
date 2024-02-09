import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByGenereComponent } from './get-book-by-genere.component';

describe('GetBookByGenereComponent', () => {
  let component: GetBookByGenereComponent;
  let fixture: ComponentFixture<GetBookByGenereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBookByGenereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBookByGenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
