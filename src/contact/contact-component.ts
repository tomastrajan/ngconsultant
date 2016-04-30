import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, Router } from "angular2/router";
import { FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, Control } from "angular2/common";

import { emailValidator } from "../common/services/validation-service";

@Component({
    selector: "contact",
    template: require("./contact-component.html"),
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export default class ContactComponent {

    private submitted: boolean = false;
    private contactForm: ControlGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.contactForm = this.formBuilder.group({
            interest: ["", Validators.required],
            name: ["", Validators.required],
            company: [""],
            position: ["", Validators.required],
            email: ["", Validators.compose([Validators.required, emailValidator])],
            phone: [""],
            message: [""]
        });
    }

    public onSubmit() {
        if (!this.contactForm.valid) {
            this.getControls().forEach((control: Control) => control.markAsDirty());
            return;
        }
        this.submitted = true;
        console.log(this.contactForm.value); // TODO send logic
    }

    public onReset() {
        this.getControls().forEach((control: Control) => control.updateValue(""));
        this.contactForm.updateValueAndValidity();
    }

    public onReload() {
        this.router.navigate(["Home"]);
        this.router.navigate(["Contact"]);
    }

    private getControls() {
        return Object.keys(this.contactForm.controls).map(prop => this.contactForm.controls[prop]);
    }
    
}
