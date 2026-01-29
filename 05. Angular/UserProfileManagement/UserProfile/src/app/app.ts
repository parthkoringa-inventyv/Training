import { Component, computed, effect, ElementRef, inject, Signal, signal, ViewChild, ViewChildren, WritableSignal } from '@angular/core';
import { UserCard } from './components/user-card/user-card';
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from './interfaces/user-interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [UserCard,MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly userService: UserService = inject(UserService);

  protected readonly title = signal('UserProfile');

  eventRecieved = signal<UserInterface | null>(null);
  userData = this.userService.getUserData();
  userCount = computed(() => this.userData().length);
  constructor() {
    effect(() => {
      console.log('User count changed:', this.userCount());
    });
  }

  @ViewChildren(UserCard) allUserCards!: UserCard[];
  @ViewChild('eventReciever') eventCard!: ElementRef;

  ngOnInit() {
    console.log('Appcomponent ngOnInit called');
    console.log('Service Injected: ', this.userService);
  }

  // all view queries are resolved so we can access them in ngafterviewinit
  ngAfterViewInit() {
    console.log('Appcomponent ngAfterViewInit called');
    console.log('View Queries resolved!');
    console.log('All UserCards:', this.allUserCards);
  }

  statusToggle(user: UserInterface) {
    this.eventRecieved.set(user);
    console.log('Status toggle event received for user:', user.username);
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
