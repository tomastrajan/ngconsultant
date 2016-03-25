import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from "angular2/router";

import HomeComponent from "./home/home-component";
import AboutComponent from "./about/about-component";
import BlogComponent from "./blog/blog-component";
import ContactComponent from "./contact/contact-component";
import OssComponent from "./oss/oss-component";
import ServicesComponent from "./services/services-component";

@Component({
    selector: "app",
    template: `
        <div class="wrapper">
            <nav>
                <div class="nav-wrapper container"><a id="logo-container" [routerLink]="['Home']" class="brand-logo">NG-CONSULTANT</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a [routerLink]="['Home']">Home</a></li>
                        <li><a [routerLink]="['Services']">Services</a></li>
                        <li><a [routerLink]="['About']">About</a></li>
                        <li><a [routerLink]="['Blog']">Blog</a></li>
                        <li><a [routerLink]="['Oss']">Open source</a></li>
                        <li><a [routerLink]="['Contact']">Contact</a></li>
                    </ul>
                    <ul id="nav-mobile" class="side-nav" id="side-mobile">
                        <li><a [routerLink]="['Home']">Home</a></li>
                        <li><a [routerLink]="['Services']">Services</a></li>
                        <li><a [routerLink]="['About']">About</a></li>
                        <li><a [routerLink]="['Blog']">Blog</a></li>
                        <li><a [routerLink]="['Oss']">Open source</a></li>
                        <li><a [routerLink]="['Contact']">Contact</a></li>
                    </ul>
                    <a href="javascript:void(0)" data-activates="side-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
                </div>
            </nav>
            <div class="content container">
                <router-outlet></router-outlet>
            </div>
            <footer class="page-footer">
              <div class="container">
                <div class="row">
                  <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                  </div>
                  <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                      <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container">
                © 2014 Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
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
