import { HrmsAppPage } from './app.po';

describe('hrms-app App', function() {
  let page: HrmsAppPage;

  beforeEach(() => {
    page = new HrmsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
