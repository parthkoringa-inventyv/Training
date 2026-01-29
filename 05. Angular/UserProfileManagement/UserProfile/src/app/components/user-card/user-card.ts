import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { UserInterface } from '../../interfaces/user-interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input({ required: true }) user!: UserInterface;
  @Output() changeBorder = new EventEmitter<UserInterface>();
  
  ngOnChanges(){
    console.log('user-card component NgOnChanges called');
    console.log('New User input recieved: ', this.user);
  }
  
  toggleStatus() {
    this.user.status = this.user.status === 'Active' ? 'Inactive' : 'Active';
    this.changeBorder.emit(this.user);
  }
}