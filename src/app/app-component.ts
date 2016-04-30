import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";

import HttpClient from "../common/services/http-client";

import HomeComponent from "../home/home-component";
import ContactComponent from "../contact/contact-component";
import OssComponent from "../oss/oss-component";
import ServicesComponent from "../services/services-component";
import SandboxComponent from "../sandbox/sandbox-component";

@Component({
    selector: "app",
    template: require("./app-component.html"),
    directives: [ROUTER_DIRECTIVES],
    providers: [HttpClient]
})
@RouteConfig([
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/services", name: "Services", component: ServicesComponent },
    { path: "/oss", name: "Oss", component: OssComponent },
    { path: "/sandbox/...", name: "Sandbox", component: SandboxComponent },
    { path: "/contact", name: "Contact", component: ContactComponent }
])
export default class AppComponent {

    public blogUrl: string = "https://blog.ngconsultant.io";
    public year: number = new Date().getFullYear();
    public route: string;
    public pending: boolean = false;

    constructor(private router: Router, private http: HttpClient) {
        this.http.pending
            .subscribe((pending: boolean) => setTimeout(() => this.pending = pending));

        this.router
            .subscribe((route: string) => {
                this.route = route;

                // materialize css init after component change
                setTimeout(() => {
                    // (<any>$("select")).material_select();
                    (<any>$("datepicker")).pickadate({
                        selectMonths: true
                    });
                }, 10);
            });
    }

}
