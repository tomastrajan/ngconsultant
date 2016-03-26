import "es6-shim";
import "es6-promise";
import "zone.js";
import "rxjs";
import "reflect-metadata";

import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { ROUTER_PROVIDERS, APP_BASE_HREF } from "angular2/router";

import "./main.scss";

import AppComponent from "./app-component";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/ngconsultant'})
]).then(() => {
    (<any>$(".button-collapse")).sideNav({
        closeOnClick: true
    });
});
