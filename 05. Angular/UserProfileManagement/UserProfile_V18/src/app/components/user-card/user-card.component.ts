import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({ required: true }) user!: UserInterface;
  @Output() changeBorder = new EventEmitter<UserInterface>();
  
  ngOnChanges(){
    console.log('New User input recieved: ', this.user);
  }
  
  toggleStatus() {
    this.user.status = this.user.status === 'Active' ? 'Inactive' : 'Active';
    this.changeBorder.emit(this.user);
  }
}


