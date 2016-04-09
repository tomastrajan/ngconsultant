import "rxjs";
import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";

import "./main.scss";

import AppComponent from "./app/app-component";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then(() => {
    (<any>$(".button-collapse")).sideNav({
        closeOnClick: true
    });
});