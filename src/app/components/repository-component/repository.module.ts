import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular5-data-table';
import {ROUTES} from './repository.routes';
import {RepositoryService} from '../../shared/repository-service/repository.service';
import {RepositoryViewDetailComponent} from './view-detail/repository-view-detail.component';


@NgModule({
  declarations: [
    RepositoryViewDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule.forRoot()
  ],
  providers: [RepositoryService],
  bootstrap: []
})
export class RepositoryModule { }
