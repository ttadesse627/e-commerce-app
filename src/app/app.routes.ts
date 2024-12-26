import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'user',
        title: 'User Registration',
        component: AuthComponent,
    },
    {
        path: '',
        title: 'Home',
        component: AppComponent,
    }
];
