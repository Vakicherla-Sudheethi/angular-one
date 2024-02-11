import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../Models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: User;
  username: string = '';
  email: string = '';
  password: string = '';
  roleName:string= '';
  errMsg: string = '';
  httpResponse: any;
// Adjust the type according to your needs
roleMap: { key: string, value: string }[] = [
  { key: 'Admin', value: 'Admin' },
  { key: 'User', value: 'User' },
  // Add more roles as needed
];
selectedRole: string = '';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
 

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
    const randomUserID = Math.floor(Math.random() * 100000) + 1;
    this.user.userID=randomUserID;
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.roleName=this.selectedRole;
   
    console.log(this.user);

    this.http
      .post('http://localhost:5037/api/User/AddNewUser', this.user)
      .subscribe((response) => {
        console.log(response);
        // this.sendEmail();
      });

    // this.sendEmail();
    this.router.navigateByUrl('login');
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
