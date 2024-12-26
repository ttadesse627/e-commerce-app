import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductItem } from './shared/models/ProductItem';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
    {
        path: ':id',
        title: 'Product Details',
        component: ProductItem
    },
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    }
)

export class AppRoutingModule{}
