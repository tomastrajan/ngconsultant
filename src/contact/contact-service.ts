import { Observable } from "rxjs/Observable";
import { Injectable } from "angular2/core";
import HttpClient from "../common/services/http-client";

@Injectable()
export default class ContactService {

    private API_URL: string = "http://ngconsultantserver-trajan.rhcloud.com";

    constructor(private http: HttpClient) {}

    public sendContactForm(contactForm: ContactForm): Observable<any> {
        return this.http.post(`${this.API_URL}/contact`, contactForm);
    }

}

export interface ContactForm {
    interest: string;
    name: string;
    company: string;
    position: string;
    email: string;
    phone: string;
    message: string;
}