import { ClinicFrontEndPage } from './app.po';

describe('clinic-front-end App', () => {
  let page: ClinicFrontEndPage;

  beforeEach(() => {
    page = new ClinicFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
