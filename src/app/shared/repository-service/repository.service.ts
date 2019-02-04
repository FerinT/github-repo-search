import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Repository} from './repository';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RepositoryService {

  private getManyUrl = 'https://api.github.com/search/repositories';
  private getSingleUrl = 'https://api.github.com/repos';

  constructor(private httpClient: HttpClient) {}

  // change this to an actual type not any
  public findRepositories(searchValue: string, pageNumber: number = 1): Observable<HttpResponse<any>> {
    const httpConfig = this.constructHttpConfig();
    const url = this.getManyUrl + '?q=' + searchValue + '&page=' + pageNumber;

    return this.httpClient.get<Repository>(url, {
      headers: httpConfig,
      observe: 'response'
    });
  }

  public getRepository(repoName: string, username: string) {
    const httpConfig = this.constructHttpConfig();

    const url = this.getSingleUrl + '/' +  username + '/' + repoName;

    return this.httpClient.get<Repository>(url, {
      headers: httpConfig,
      observe: 'response'
    });
  }

  private constructHttpConfig(): any {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.github.mercy-preview+json')
    };
  }

}
