import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RepositoryIssue} from "../../../shared/repository-issue-service/repository-issue";
import {RepositoryIssueService} from "../../../shared/repository-issue-service/repository-issue.service";
import {Pagination} from "../../../shared/pagination-service/pagination";

@Component({
    selector: 'app-repo-issue',
    templateUrl: './repository-issue.component.html'
})
export class RepositoryIssueComponent implements OnInit {

    public repositoryIssues: RepositoryIssue[];
    public cachedRepositoryIssues: RepositoryIssue[];

    // pie chart configuration
    public pieChartLabels: string[] = ['Open Issues', 'Closed Issues'];
    public pieChartData: number[] = [1, 1];
    public dropDownList = [];
    public dropDownListSettings = {};

    private pagination: Pagination;

    constructor(private repositoryIssueService: RepositoryIssueService,
                private activatedRoute: ActivatedRoute) {
        this.repositoryIssues = [];
        this.pagination = new Pagination();
    }

    public ngOnInit(): void {
        const username = this.activatedRoute.snapshot.params['username'];
        const repoName = this.activatedRoute.snapshot.params['reponame'];

        let tempRepo: RepositoryIssue[] = [];

        // retrieve all issues associated with repo:
        // recursively call method until no more records are returned
        // this is due to paging and the paging information not being
        // sent by GitHub with initial get
        const retriveAllIssues = () => {
            this.repositoryIssueService.getRepositoryIssues(repoName, username, this.pagination.page_number).subscribe((repo) => {
                tempRepo = repo.body;
                repo.body.forEach((val) => this.repositoryIssues.push(val));
                this.pagination.page_number += 1;
            }, (error) => {
                console.log('An error occurred retrieving repository issues: ' + error);
            }, () => {
                if (tempRepo.length > 0) {
                    retriveAllIssues();
                } else {
                    const openIssues = this.repositoryIssues.filter((val) => {
                        return val.state === 'open';
                    });
                    const closedIssues = this.repositoryIssues.filter((val) => {
                        return val.state === 'closed';
                    });
                    this.pieChartData = [openIssues.length, closedIssues.length];
                    this.cachedRepositoryIssues = this.repositoryIssues;
                }
            });
        }
        retriveAllIssues();


        this.dropDownList = [
            {item_id: 1, item_text: 'Open'},
            {item_id: 2, item_text: 'Closed'}
        ];

        this.dropDownListSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true
        };

    }

    public filterList(items: any) {
        if (items.item_text === 'Open') {
            this.repositoryIssues = this.cachedRepositoryIssues.filter((val) => {
                return val.state === 'open'
            });
        } else {
            this.repositoryIssues = this.cachedRepositoryIssues.filter((val) => {
                return val.state === 'closed'
            });
        }

    }
}

