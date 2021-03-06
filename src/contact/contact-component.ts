import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, Router } from "angular2/router";
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, Control, AbstractControl} from "angular2/common";

import { emailValidator } from "../common/services/validation-service";
import ContactService from "./contact-service";

@Component({
    selector: "contact",
    template: require("./contact-component.html"),
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [ContactService]
})
export default class ContactComponent {

    private submitted: boolean = false;
    private contactForm: ControlGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private service: ContactService) {
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

    public onSubmit(): void {
        if (!this.contactForm.valid) {
            this.getControls().forEach((control: Control) => control.markAsDirty());
            return;
        }
        this.service
            .sendContactForm(this.contactForm.value)
            .subscribe(() => this.submitted = true);
    }

    public onReset(): void {
        this.getControls().forEach((control: Control) => control.updateValue(""));
        this.contactForm.updateValueAndValidity();
    }

    public onReload(): void {
        this.router.navigate(["Home"]);
        this.router.navigate(["Contact"]);
    }

    private getControls(): AbstractControl[] {
        return Object.keys(this.contactForm.controls).map((prop: string) => this.contactForm.controls[prop]);
    }

}
