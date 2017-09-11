import { AngularDemoRoutePage } from './app.po';

describe('angular-demo-route App', () => {
  let page: AngularDemoRoutePage;

  beforeEach(() => {
    page = new AngularDemoRoutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
