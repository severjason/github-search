type IssueState = 'open' | 'closed' | 'all';

export interface Issue {
  id: number;
  state: IssueState;
  title: string;
  body: string;
  html_url: string;
  // did not write full interface as it was not needed
}
