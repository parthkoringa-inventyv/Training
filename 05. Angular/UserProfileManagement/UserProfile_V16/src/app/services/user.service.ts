import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserInterface[] = [];

  getUserData(): Observable<UserInterface[]>
  {
    return from(
      fetch('https://dummyjson.com/users?limit=15')
      .then(res => res.json())
    ).pipe(
      map((response: any) => 
        response.users.map((user: any): UserInterface => ({
          username: user.username ?? undefined,
          age: user.age,
          email: user.email,
          imageURL: user.image,
          status: Math.random() > 0.5 ? 'Active': 'Inactive'
        }))
      )
    );

    
  }
}
