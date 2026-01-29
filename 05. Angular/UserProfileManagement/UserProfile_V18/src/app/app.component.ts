import { Component, ElementRef, inject, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from './services/user.service';
import { UserInterface } from './interfaces/user-interface';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, MatCardModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'UserProfile_V16';
  userService: UserService = inject(UserService);
  eventRecieved: UserInterface | null = null;
  userCount: number = 0;
  userData$ = this.userService.getUserData();

  @ViewChildren(UserCardComponent) allUserCards!: UserCardComponent[];
  @ViewChild('eventReciever') eventCard!: ElementRef;

  ngOnInit() {
    console.log('ngOnInit called');
    
    // Subscribe to get the user count
    this.userData$.subscribe(users => {
      this.userCount = users.length;
      console.log('Total users received:', this.userCount);
    });
  }

  // all view queries are resolved so we can access them in ngafterviewinit
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('All UserCards:', this.allUserCards);
  }

  statusToggle(user: UserInterface) {
    this.eventRecieved = user;

    // Using setTimeout to ensure the view has updated before accessing the element
    setTimeout(() => {
      if(this.eventCard)
      {
        console.log('Event card accessed: ', this.eventCard);
        console.log('Event card innerText: ', this.eventCard.nativeElement.innerText);
      }
    });
    
  }
}
