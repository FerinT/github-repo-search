import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RepositoryIssue} from './repository-issue';

@Injectable()
export class RepositoryIssueService {
    private url = 'https://api.github.com/repos';

    constructor(private httpClient: HttpClient) {}

    public getRepositoryIssues(repoName: string, username: string) {
        const httpConfig = this.constructHttpConfig();

        this.url = this.url + '/' +  username + '/' + repoName;

        return this.httpClient.get<RepositoryIssue>(this.url, {
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
