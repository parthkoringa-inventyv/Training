import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private authservice = inject(AuthService);
  private router = inject(Router);
  logout()
  {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
