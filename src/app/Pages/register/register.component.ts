import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User;
  username:string='';
  email: string = '';
  password: string = '';
  roleName:string='';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  errMsg: string ='';

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }
  addUser() {
    let adduser = { Name:this.username,Email: this.email, Password: this.password,Role:this.roleName };
   
    this.http
      .post('http://localhost:5037/api/User/AddNewUser', this.user, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          this.errMsg = 'Registration successful!';
        },
        (error) => {
          console.error(error);
          this.errMsg = 'Failed to register user.';
        }
      );
  }
}
