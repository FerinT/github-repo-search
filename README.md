# GithubRepoSearch

## Features
1) As a User I would like to search github in order to view the available repositories for a given search term

2) As a User I would like to select a particular repository in order to view more details of the selected repository

a. URL, description, forks count, stargazers count, open issues count etc

3) As a User I would like to link off to the actual GitHub page where the repository is located in order to view the code in the repository

4) As a User I would like to view a list of all the current issues for a repository in order to view the backlog of issues

5) As a User I would like to filter the list of issues between STATE = ["Open" or "Closed"] in order to look through the filtered list

6) As a User I would like to view a PIE chart that displays the breakdown of issues for the repository (open vs closed) in order to visually see how well built and maintained the repository is


## Improvements:
*   Test coverage
*   Error handling
*   Error toasts to alert the user when an error has occurred
*   Caching to prevent unnecessary server calls when paging through the table
*   Externalise helper methods into a class such as paging  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
