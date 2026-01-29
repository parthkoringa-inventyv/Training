import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { UserInterface } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-user-card',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule, FormsModule],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
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
