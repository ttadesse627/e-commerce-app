import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './features/home/home.routes';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
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
