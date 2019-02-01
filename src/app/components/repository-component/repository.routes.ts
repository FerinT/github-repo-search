import {Routes} from '@angular/router';
import {RepositoryViewDetailComponent} from './view-detail/repository-view-detail.component';

export const ROUTES: Routes = [
  {
    path: 'view/:reponame/:username',
    component: RepositoryViewDetailComponent
  },
];
