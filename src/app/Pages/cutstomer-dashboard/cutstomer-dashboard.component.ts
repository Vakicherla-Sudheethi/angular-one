import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cutstomer-dashboard',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink],
  templateUrl: './cutstomer-dashboard.component.html',
  styleUrl: './cutstomer-dashboard.component.css'
})
export class CutstomerDashboardComponent {

  constructor(private router:Router)
{
}
  logOut()
  {
    this.router.navigateByUrl('login');
  }
}
