import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular5-data-table';
import {RepositoryModule} from './components/repository-component/repository.module';
import {RepositoryListviewComponent} from './components/repository-component/listview/repository-listview.component';


@NgModule({
  declarations: [
    AppComponent,
    RepositoryListviewComponent
  ],
  imports: [
    BrowserModule,
    RepositoryModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
