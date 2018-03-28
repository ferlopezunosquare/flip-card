import { SblCmpPage } from './app.po';

describe('sbl-cmp App', function() {
  let page: SblCmpPage;

  beforeEach(() => {
    page = new SblCmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
