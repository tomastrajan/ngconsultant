import { Observable } from "rxjs/Observable";
import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";



@Injectable()
export default class OssService {

    private API_URL: string = "https://api.github.com";

    constructor(private http: Http) {}

    public searchRepositories(query: any): Observable<Repository> {
        return this.http
            .get(`${this.API_URL}search/repositories?q=${query}`)
            .map((res: Response) => res.json())
            .map((data: any) => data.items
                .map(this.dtoToModelRepository)
                .sort(this.sortByStargazers)
            );
    }

    public getUserRepositories(user: string): Observable<Repository> {
        return this.http
            .get(`${this.API_URL}/users/${user}/repos`)
            .map((res: Response) => res.json())
            .map((repos: any) => repos
                .map(this.dtoToModelRepository)
                .filter(this.withStargazerOnly)
                .sort(this.sortByStargazers)
            );
    }

    public getContent(owner: string, repo: string, path: string = ""): any {
        path = path === "null" ? "" : path;
        return this.http
            .get(`${this.API_URL}repos/${owner}/${repo}/contents/${path}`)
            .map((res: Response) => res.json())
            .map((data: any) => Array.isArray(data)
                ? data.map(this.dtoToModelContent).sort(this.sortByType)
                : this.dtoToModelContent(data));
    }

    public getContentRaw(url: string): any {
        return this.http
            .get(url)
            .map((res: Response) => res.text());
    }

    private withStargazerOnly(repo: Repository): boolean {
        return repo.stargazers.length > 0;
    }

    private sortByStargazers(a: Repository, b: Repository): number {
        return a.stargazers < b.stargazers ? 1 : a.stargazers > b.stargazers ? -1 : 0;
    }

    private sortByType(a: Item, b: Item): number {
        if (a.type !== b.type) {
            return a.type === "file" ? 1 : -1;
        } else {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        }
    }

    private dtoToModelRepository(item: any): Repository {
        return {
            id: item.id,
            name: item.full_name.split("/")[1],
            description: item.description,

            url: item.html_url,
            clone: item.clone_url,
            homepage: item.homepage,

            stargazers: item.stargazers_count,
            forks: item.forks_count,
            owner: {
                id: item.owner.id,
                type: item.owner.type,
                name: item.owner.login,

                url: item.owner.html_url,
                avatar: item.owner.avatar_url
            }
        };
    }

    /* tslint:disable:variable-name */
    private dtoToModelContent(data: any): Item {
        const { name, path, type, download_url }: any = data;
        return { name, path, type, url: encodeURIComponent(download_url) };
    }
    /* tslint:enable:variable-name */

}

export interface Repository {
    id: String;
    name: String;
    description: String;

    url: String;
    clone: String;
    homepage: String;

    stargazers: String;
    forks: String;
    owner: Owner;
}

export interface Owner {
    id: String;
    type: String;
    name: String;

    url: String;
    avatar: String;
}

export interface Item {
    name: string;
    path: string;
    type: string;
    url: string;
}
