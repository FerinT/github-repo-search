export class Repository {
    id: number;
    name: string;
    owner: { login: string };
    full_name: string;
    html_url: string;
    description: string;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
    issues_url: string;
    subscribers_count: number;
    topics: string[];
    license: { name: string };
    login: string;
    avatar_url: string;
}
