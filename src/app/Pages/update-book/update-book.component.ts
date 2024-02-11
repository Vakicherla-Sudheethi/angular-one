import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  bookId?: number = 0;
  book: Book;
  errMsg: string = '';
  isBookExist: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.book = new Book();
    this.activateRoute.params.subscribe((p) => (this.bookId = p['bid']));
    console.log(this.bookId);
    this.search();
  }

  search() {
    this.http
      .get<Book>('http://localhost:5037/GetBookById/' + this.bookId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.book = response;
          this.isBookExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Book Id';
          this.isBookExist = false;
        }
      });
  }
  edit(id: any) {
    console.log(id);
    this.http
      .put('http://localhost:5037/UpdateBook/' + id, this.book,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        
      });
    this.router.navigateByUrl('admin-dashboard/get-all-books');
    }
    getId(id: any) {
      this.router.navigateByUrl('admin-dashboard/search/' + id);
    }
}
