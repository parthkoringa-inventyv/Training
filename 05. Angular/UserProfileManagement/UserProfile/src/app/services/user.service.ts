import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal<UserInterface[]>([]);

  getUserData(): WritableSignal<UserInterface[]> {
    {
      fetch('https://dummyjson.com/users?limit=15')
        .then(res => res.json())
        .then(data => this.users.set(data.users.map((user: any) => ({
            username: user.username,
            age: user.age,
            email: user.email,
            imageURL: user.image,
            status: Math.random() > 0.5 ? 'Active': 'Inactive'
          }))));
      return this.users;
    }
  }
}
