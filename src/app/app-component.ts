import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

import HomeComponent from "../home/home-component";
import AboutComponent from "../about/about-component";
import BlogComponent from "../blog/blog-component";
import ContactComponent from "../contact/contact-component";
import OssComponent from "../oss/oss-component";
import ServicesComponent from "../services/services-component";

@Component({
    selector: "app",
    template: require("./app-component.html"),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/services", name: "Services", component: ServicesComponent },
    { path: "/oss", name: "Oss", component: OssComponent },
    { path: "/blog", name: "Blog", component: BlogComponent },
    { path: "/about", name: "About", component: AboutComponent },
    { path: "/contact", name: "Contact", component: ContactComponent }
])
export default class AppComponent {}
