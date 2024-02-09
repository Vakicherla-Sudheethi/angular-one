import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookByAuthorComponent } from './get-book-by-author.component';

describe('GetBookByAuthorComponent', () => {
  let component: GetBookByAuthorComponent;
  let fixture: ComponentFixture<GetBookByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBookByAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBookByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
