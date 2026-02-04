import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  
  user?: User;
  loading = true;
  error = '';

  ngOnInit()
  {
    this.getUserProfile();
  }

  getUserProfile()
  {
    this.http.get<User>('https://api.escuelajs.co/api/v1/auth/profile')
    .subscribe({
      next: (res) =>
      {
        this.user = res;
        this.loading = false;
        console.log('Response: ', res);
        this.cdr.detectChanges();
      },
      error: (error) => 
      {
        this.loading = false;
        console.error(error);
        this.error = 'Failed to load profile';
        this.cdr.detectChanges();
      }
    })
  }
}