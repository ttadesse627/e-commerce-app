import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './features/home/home.routes';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/home/home.routes').then(m => m.HomeRoutingModule)
            }
        ],
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
