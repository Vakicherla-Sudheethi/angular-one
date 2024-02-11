import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-get-book-by-author',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './get-book-by-author.component.html',
  styleUrl: './get-book-by-author.component.css'
})
export class GetBookByAuthorComponent {
  books: Book[] = [];
  author: string = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  authorName() {
    this.http
      .get<Book[]>('http://localhost:5037/SearchBooksByAuthor/' + this.author, this.httpOptions)
      .subscribe((response) => {
        this.books = response;
        console.log(this.books);
      });
  }
}