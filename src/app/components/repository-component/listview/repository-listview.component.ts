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
  public repositories: Repository[] = [];

  constructor(private repositoryService: RepositoryService,
              private formBuilder: FormBuilder) {

    this.buildForm();
  }

  public ngOnInit(): void {}

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
