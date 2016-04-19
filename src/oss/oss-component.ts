import { Component } from "angular2/core";
import OssService, { Repository } from "./oss-service";
import OssRepositoryComponent from "./oss-repository-component";
import {OnActivate, ComponentInstruction} from "angular2/router";

@Component({
    selector: "oss",
    template: require("./oss-component.html"),
    directives: [OssRepositoryComponent],
    providers: [OssService]
})
export default class OssComponent implements OnActivate {

    private repos: Repository[] = [];

    constructor(private ossService: OssService) {}

    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        this.ossService.getUserRepositories("tomastrajan")
            .subscribe(
                (repos: any) => this.repos = repos,
                (err: any) => console.log(err)
            );
    }

}
