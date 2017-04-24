import { Ng2DirectivesPage } from './app.po';

describe('ng2-directives App', () => {
  let page: Ng2DirectivesPage;

  beforeEach(() => {
    page = new Ng2DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
