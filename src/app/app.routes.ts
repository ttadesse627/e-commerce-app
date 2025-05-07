import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './features/home/home.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './features/auth/auth.component';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';

export const routes: Routes = [
    {
        path: 'auth',
        title: 'Authenticate',
        component: AuthComponent,
    },
    {
        path: 'user',
        title: 'Registration Form',
        component: UserRegistrationComponent,
    },
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HomeRoutingModule)
    },
    
    {
        path: '**',
        title: 'Not Found',
        component: NotFoundComponent,
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes),
            HomeRoutingModule
        ],
        exports: [RouterModule],
    }
)

export class AppRoutingModule { }
