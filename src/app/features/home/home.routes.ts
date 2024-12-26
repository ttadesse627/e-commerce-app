import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "../product/components/product-list/product-list.component";
import { NgModule } from "@angular/core";


export const routes: Routes = [
    {
        path: 'product',
        title: 'List of Our Products',
        component: ProductListComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)

export class HomeRoutingModule { };