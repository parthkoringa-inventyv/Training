import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { UserProfile } from './components/user-profile/user-profile';
import { Navbar } from './components/navbar/navbar';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: 'login',component: Login },
    { 
        path: '',
        component: Navbar,
        canActivate: [authGuard],
        children:[
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'user-profile', component: UserProfile }
        ]
    }
];
