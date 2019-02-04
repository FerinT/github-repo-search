import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {HttpResponse} from "@angular/common/http";
import {RepositoryIssueService} from "./repository-issue.service";
import {RepositoryIssue} from "./repository-issue";

describe('Repository issue service tests', () => {
    let testController: HttpTestingController;
    let service: RepositoryIssueService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RepositoryIssueService]
        });

        testController = TestBed.get(HttpTestingController);
        service = TestBed.get(RepositoryIssueService);
    });

    it('should call the get many method (search)', (done) => {
        service.getRepositoryIssues('hello', 'admin', 1).subscribe((repositories: HttpResponse<RepositoryIssue>) => {
            done();
        });

        const testRequest = testController.expectOne('https://api.github.com/repos/admin/hello/issues?state=all&page=');
        testRequest.flush({});
        expect(testRequest.request.method).toBe('GET');
        expect(testRequest.request.headers.get('Accept')).toBe('application/vnd.github.symmetra-preview+json');
    });

});