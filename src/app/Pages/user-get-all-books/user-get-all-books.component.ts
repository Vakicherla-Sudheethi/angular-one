import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Book } from '../../Models/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-get-all-books',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-get-all-books.component.html',
  styleUrl: './user-get-all-books.component.css'
})
export class UserGetAllBooksComponent {
  bookss: Book[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllBooks();
}
getAllBooks()
{
  this.http
      .get<Book[]>('http://localhost:5037/GetAllBooks',this.httpOptions)
      .subscribe((response) => {
        this.bookss = response;
        console.log(this.bookss);
      });
}
}
