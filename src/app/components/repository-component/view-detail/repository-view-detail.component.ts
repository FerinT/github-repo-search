// get repo id onint and do a single get


import {Component, OnInit} from '@angular/core';
import {RepositoryService} from '../../../shared/repository-service/repository.service';
import {Repository} from '../../../shared/repository-service/repository';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repo-view-detail',
  templateUrl: './repository-view-detail.component.html'
})
export class RepositoryViewDetailComponent implements OnInit {

  public repository: Repository;

  constructor(private repositoryService: RepositoryService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];
    const repoName = this.activatedRoute.snapshot.params['reponame'];

    this.repositoryService.getRepository(repoName, username).subscribe((repo) => {
      this.repository = repo.body;
    }, (error) => {
      console.log('An error occurred retrieving single repository: ' + error);
    });
  }

}
