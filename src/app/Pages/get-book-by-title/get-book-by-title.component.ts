import { Component } from '@angular/core';
import { Book } from '../../Models/book';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-book-by-title',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './get-book-by-title.component.html',
  styleUrl: './get-book-by-title.component.css'
})
export class GetBookByTitleComponent {
title:string='';
books:Book[]=[];
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router) {}

titleName()
{
  this.http.get<Book[]>
    ('http://localhost:5037/SearchBooksByTitle/' + this.title,this.httpOptions)
    .subscribe((response) => {
      this.books=response;
      console.log(this.books);
    });
}

}
