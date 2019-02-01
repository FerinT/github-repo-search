import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {RepositoryIssue} from './repository-issue';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RepositoryIssueService {

    constructor(private httpClient: HttpClient) {}

    public getRepositoryIssues(repoName: string, username: string, state: string): Observable<HttpResponse<any>> {
        let url = 'https://api.github.com/repos';
        const httpConfig = this.constructHttpConfig();

        url = url + '/' +  username + '/' + repoName + '/issues?state=' + state;

        return this.httpClient.get<RepositoryIssue>(url, {
            headers: httpConfig,
            observe: 'response'
        });
    }

    private constructHttpConfig(): any {
        return {
            headers: new HttpHeaders()
                .set('Accept', 'application/vnd.github.symmetra-preview+json'),
            params: new HttpParams()
        };
    }
}
