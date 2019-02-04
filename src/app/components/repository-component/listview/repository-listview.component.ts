import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Repository} from '../../../shared/repository-service/repository';
import {RepositoryService} from '../../../shared/repository-service/repository.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Pagination} from "../../../shared/pagination-service/pagination";

@Component({
    selector: 'app-repo-listview',
    templateUrl: './repository-listview.component.html'
})
export class RepositoryListviewComponent {

    private searchForm: FormGroup;
    private paging: Pagination;
    public repositories: Repository[] = [];

    constructor(private repositoryService: RepositoryService,
                private formBuilder: FormBuilder) {

        this.paging = new Pagination();
        this.buildForm();
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

            // retrieve values needed for paging
            this.paging.page_number = 1;
            this.paging.total_count = val.body.total_count;

            val.body.items.forEach((repo) => {
                this.repositories.push(repo);
            });
        }, (error) => {
            console.log('an error occurred: ' + error.toString());
        });
    }

    /**
     * method to handle server side paging, fetches next batch of record if available
     */
    public nextPage() {
        const searchValue = this.searchForm.controls['searchValue'].value;

        if(this.paging.page_number < Math.ceil(this.paging.total_count / 30)) {
            this.repositories = [];
            this.paging.page_number = this.paging.page_number + 1;

            this.repositoryService.findRepositories(searchValue, this.paging.page_number).subscribe((val) => {

                val.body.items.forEach((repo) => {
                    this.repositories.push(repo);
                });
            }, (error) => {
                console.log('an error occurred: ' + error);
            });

        } else {
            console.log('cannot fetch anymore records');
        }

    }

    /**
     * method to handle server side paging, fetches previous batch of record if available
     */
    public previousPage() {
        const searchValue = this.searchForm.controls['searchValue'].value;

        if(this.paging.page_number > 1) {
            this.repositories = [];
            this.paging.page_number = this.paging.page_number - 1;

            this.repositoryService.findRepositories(searchValue, this.paging.page_number).subscribe((val) => {

                val.body.items.forEach((repo) => {
                    this.repositories.push(repo);
                });
            }, (error) => {
                console.log('an error occurred: ' + error);
            });

        } else {
            console.log('cannot fetch anymore records');
        }

    }
}
