import { Component } from "@angular/core";
import {RouterModule, Router} from "@angular/router";


@Component({
    selector: 'app-not-found',
    imports: [RouterModule],
    template: `
        <div class="contain-layout c">
            <h1 class="not-found-title">404 - Page Not Found</h1>
            <p class="not-found-message">The page you are looking for does not exist.</p>
            <button type="button" (click)="gotoHome()" class="text-blue-700">Go to Home</button>
        </div>
    `,
})

export class NotFoundComponent{
    constructor(private router: Router){}
    gotoHome(){
        this.router.navigate([''])
    }
}