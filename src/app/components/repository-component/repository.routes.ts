import {Routes} from '@angular/router';
import {RepositoryViewDetailComponent} from './view-detail/repository-view-detail.component';
import {RepositoryIssueComponent} from "./repository-issue/repository-issue.component";

export const ROUTES: Routes = [
  {
    path: 'view/:reponame/:username',
    component: RepositoryViewDetailComponent
  },
    {
        path: 'issue/:reponame/:username',
        component: RepositoryIssueComponent
    }
];
