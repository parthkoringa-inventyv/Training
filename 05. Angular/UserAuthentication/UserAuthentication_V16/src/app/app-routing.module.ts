import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { 
      path: '',
      component: NavbarComponent,
      canActivate: [authGuard],
      children:[
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'user-profile', component: UserProfileComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
