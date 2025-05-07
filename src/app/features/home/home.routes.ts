import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "../product/components/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "../../not-found/not-found.component";
import { ProductDetailsComponent } from "../product/components/product-details/product-details.component";


export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'product',
        title: 'List of Our Products',
        component: ProductListComponent,
    },
    {
        path: 'product/:id',
        title: 'Product Details',
        component: ProductDetailsComponent,
    },
    {
        path: '**',
        title: 'Not Found',
        component: NotFoundComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)

export class HomeRoutingModule { };