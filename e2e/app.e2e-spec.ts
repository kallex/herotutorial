import { HerotutorialPage } from './app.po';

describe('herotutorial App', function() {
  let page: HerotutorialPage;

  beforeEach(() => {
    page = new HerotutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
