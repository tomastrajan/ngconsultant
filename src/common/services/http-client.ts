import { Injectable } from "angular2/core";
import { Http, RequestOptionsArgs, Response, RequestOptions, Headers } from "angular2/http";
import { Subject } from "rxjs";

@Injectable()
export default class HttpClient {

    private pendingCount: number = 0;

    public pending: Subject<boolean> = new Subject();
    public error: Subject<any> = new Subject();

    constructor(private http: Http) {}

    public head(url: string, options?: RequestOptionsArgs) {
        return this.doRequest("head", url, null, options);
    }

    public get(url: string, options?: RequestOptionsArgs) {
        return this.doRequest("get", url, null, options);
    }

    public delete(url: string, options?: RequestOptionsArgs) {
        return this.doRequest("delete", url, null, options);
    }

    public post(url: string, data: any, options?: RequestOptionsArgs) {
        return this.doRequest("post", url, data, options);
    }

    public put(url: string, data: any, options?: RequestOptionsArgs) {
        return this.doRequest("put", url, data, options);
    }

    public patch(url: string, data: any, options?: RequestOptionsArgs) {
        return this.doRequest("patch", url, data, options);
    }

    public getHttp(): Http {
        return this.http;
    }
    
    private doRequest(method: string, url: string, body: any, options?: RequestOptionsArgs) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        body = body ? JSON.stringify(body) : undefined;
        const opts = new RequestOptions({ method, headers, body, url });

        Object.assign(opts, options);
        
        this.pending.next(++this.pendingCount > 0);
        
        return this.http.request(url, opts)
            .do(
                () => {},
                err => this.error.next(err.json()),
                () => this.pending.next(--this.pendingCount > 0)
            )
            .map((res: Response) => res.json());
    }

};