import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RepositoryService} from "./repository.service";
import {TestBed} from "@angular/core/testing";
import {HttpResponse} from "@angular/common/http";
import {Repository} from "./repository";

describe('Repository Service tests', () => {
    let testController: HttpTestingController;
    let service: RepositoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RepositoryService]
        });

        testController = TestBed.get(HttpTestingController);
        service = TestBed.get(RepositoryService);
    });

    it('Should call the get single method for a specific repo', (done) => {
        service.getRepository('test repo', 'admin').subscribe((repository: HttpResponse<Repository>) => {
            done();
        });

        const testRequest = testController.expectOne('https://api.github.com/repos/');
        testRequest.flush({});
        expect(testRequest.request.method).toBe('GET');
        expect(testRequest.request.headers.get('Accept')).toBe('application/vnd.github.v3+json');
    });

    it('should call the get many method (search)', (done) => {
        service.findRepositories('hello').subscribe((repositories: HttpResponse<Repository>) => {
            done();
        });

        const testRequest = testController.expectOne('https://api.github.com/search/repositories');
        testRequest.flush({});
        expect(testRequest.request.method).toBe('GET');
        expect(testRequest.request.headers.get('Accept')).toBe('application/vnd.github.v3+json');
    });

});