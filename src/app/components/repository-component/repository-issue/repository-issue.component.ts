import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RepositoryIssue} from "../../../shared/repository-issue-service/repository-issue";
import {RepositoryIssueService} from "../../../shared/repository-issue-service/repository-issue.service";

@Component({
    selector: 'app-repo-issue',
    templateUrl: './repository-issue.component.html'
})
export class RepositoryIssueComponent implements  OnInit {

    public repositoryIssues: RepositoryIssue[];
    public pieChartLabels: string[] = ['Open Issues', 'Closed Issues'];
    public pieChartData: number[];
    public dropDownList = [];
    public dropDownListSettings = {};

    constructor(private repositoryIssueService: RepositoryIssueService,
                private activatedRoute: ActivatedRoute) {
        this.repositoryIssues = [];
    }

    public ngOnInit(): void {
        const username = this.activatedRoute.snapshot.params['username'];
        const repoName = this.activatedRoute.snapshot.params['reponame'];
        let openIssuesCount = 0;
        let closedIssuesCount = 0;

        // retrieve all open issues associated with repo
        this.repositoryIssueService.getRepositoryIssues(repoName, username, 'open').subscribe((repo) => {
            repo.body.forEach((val) => this.repositoryIssues.push(val));
            openIssuesCount = repo.body.length;
        }, (error) => {
            console.log('An error occurred retrieving repository issues: ' + error);
        }, () => {
            // retrieve all closed issues associated with repo
            this.repositoryIssueService.getRepositoryIssues(repoName, username, 'closed').subscribe((repo) => {
                repo.body.forEach((val) => this.repositoryIssues.push(val))
                closedIssuesCount = repo.body.length;
            }, (error) => {
                console.log('An error occurred retrieving repository issues: ' + error);
            }, () => {
                this.pieChartData = [openIssuesCount, closedIssuesCount];
            });
            this.pieChartData = [openIssuesCount, closedIssuesCount];
        });

        this.dropDownList = [
            { item_id: 1, item_text: 'Open' },
            { item_id: 2, item_text: 'Closed' }
        ];

        this.dropDownListSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }

    public filterList(items: any){
        if(items.length === 1) {
            if(items.item_text === 'Open') {
                this.repositoryIssues = this.repositoryIssues.filter((val) => {return val.state === 'open'});
            } else {
                this.repositoryIssues = this.repositoryIssues.filter((val) => {return val.state === 'closed'});
            }

        }
    }
}

