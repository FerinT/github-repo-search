import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule, DataTablePagination} from 'angular5-data-table';
import {ROUTES} from './repository.routes';
import {RepositoryService} from '../../shared/repository-service/repository.service';
import {RepositoryViewDetailComponent} from './view-detail/repository-view-detail.component';
import {RepositoryIssueComponent} from "./repository-issue/repository-issue.component";
import {RepositoryIssueService} from "../../shared/repository-issue-service/repository-issue.service";
import {ChartsModule} from "ng2-charts";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {DataTablePaginationComponent} from "angular5-data-table/datatable.module";


@NgModule({
    declarations: [
        RepositoryViewDetailComponent,
        RepositoryIssueComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule,
        RouterModule.forRoot(ROUTES),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers: [RepositoryService, RepositoryIssueService],
    bootstrap: []
})
export class RepositoryModule {
}
