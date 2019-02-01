import {Component, OnInit} from '@angular/core';
import {Repository} from '../../../shared/repository-service/repository';
import {RepositoryService} from '../../../shared/repository-service/repository.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-repo-listview',
  templateUrl: './repository-listview.component.html'
})
export class RepositoryListviewComponent implements  OnInit {

  private searchForm: FormGroup;
  // public repositories: Repository[];
  public repositories: Repository[] = [];

  constructor(private repositoryService: RepositoryService,
              private formBuilder: FormBuilder) {

    this.buildForm();
  }

  public ngOnInit(): void {
    const repo = new Repository();
    repo.html_url = 'https://api.github.com/search/repositories?q=bootstrap';
    repo.description = 'desc';
    repo.forks = 4;
    repo.watchers_count = 5;

    const repo1 = new Repository();
    repo1.html_url = 'https://api.github.com/search/issues?q=repo:username/reponame';
    repo1.description = 'desce ee';
    repo1.forks = 5;
    repo1.watchers_count = 6;

    this.repositories.push(repo);
    this.repositories.push(repo1);

  }

  private buildForm() {
    this.searchForm = this.formBuilder.group({
      searchValue: []
    });
  }

  /**
   * method used to query the repository based off the search input
   * specified by user
   */
  public search() {
    const searchValue = this.searchForm.controls['searchValue'].value;

    this.repositoryService.findRepositories(searchValue).subscribe((val) => {
      this.repositories = val.body.items;
    }, (error) => {
      console.log('an error occured');
    });
  }
}
