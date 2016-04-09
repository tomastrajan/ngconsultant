import { Component, Input } from "angular2/core";
import { Repository } from "./oss-service";

@Component({
    selector: "oss-repository",
    template: require("./oss-repository-component.html")
})
export default class OssRepositoryComponent {

    @Input() public repo: Repository;

}
