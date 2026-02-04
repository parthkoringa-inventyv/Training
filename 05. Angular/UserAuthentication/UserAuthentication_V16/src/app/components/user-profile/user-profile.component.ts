import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
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