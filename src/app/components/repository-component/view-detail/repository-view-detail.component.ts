// get repo id onint and do a single get


import {Component, OnInit} from '@angular/core';
import {RepositoryService} from '../../../shared/repository-service/repository.service';

@Component({
  selector: 'app-repo-view-detail',
  templateUrl: './repository-view-detail.component.html'
})
export class RepositoryViewDetailComponent implements  OnInit {


  constructor(private repositoryService: RepositoryService) {
  }

  public ngOnInit(): void {
    console.log('hello')
  }

}
