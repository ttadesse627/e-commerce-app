import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductItem } from '../shared/models/ProductItem';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: ':id',
        title: 'Product Details',
        component: ProductItem
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    }
)

export class AppRoutingModule{}
