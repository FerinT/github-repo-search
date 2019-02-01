import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Repository} from './repository';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RepositoryService {

  private getManyUrl = 'https://api.github.com/search/repositories';
  private getSingleUrl = 'https://api.github.com/repos/';

  constructor(private httpClient: HttpClient) {}

  // change this to an actual type not any
  public findRepositories(searchValue: string): Observable<HttpResponse<any>> {
    const httpConfig = this.constructHttpConfig();

    httpConfig.params = httpConfig.params.set('q', searchValue);
    this.getManyUrl = this.getManyUrl + '?q=' + searchValue;
    return this.httpClient.get<Repository>(this.getManyUrl, {
      headers: httpConfig,
      observe: 'response'
    });
  }

  public getRepository(repoName: string, username: string) {
    const httpConfig = this.constructHttpConfig();

    this.getSingleUrl = this.getManyUrl + '/' +  username + '/' + repoName;

    return this.httpClient.get<Repository>(this.getSingleUrl, {
      headers: httpConfig,
      observe: 'response'
    });
  }

  private constructHttpConfig(): any {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.github.mercy-preview+json'),
      params: new HttpParams()
    };
  }

}
