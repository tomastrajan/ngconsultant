import { Component } from "angular2/core";
import OssService, { Repository } from "./oss-service";
import OssRepositoryComponent from "./oss-repository-component";

@Component({
    selector: "oss",
    template: require("./oss-component.html"),
    directives: [OssRepositoryComponent],
    providers: [OssService]
})
export default class OssComponent {

    private repos: Repository[] = [];
    
    constructor(private ossService: OssService) {
        ossService.getUserRepositories("tomastrajan")
            .subscribe((repos: any) => { 
                this.repos = repos; 
            });
    }

}