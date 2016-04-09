import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";
import SandboxInfoComponent from "./sandbox-info-component";
import RxJSStateStoreComponent from "./rxjs-state-store/rxjs-state-store-component";

@Component({
    selector: "sandbox",
    template: require("./sandbox-component.html"),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/", name: "SandboxInfo", component: SandboxInfoComponent, useAsDefault: true },
    { path: "/rxjs-state-store", name: "RxJSStateStore", component: RxJSStateStoreComponent }
])
export default class SandboxComponent {}
