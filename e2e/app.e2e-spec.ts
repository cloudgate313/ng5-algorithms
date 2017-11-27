import { Ng5AlgorithmsPage } from './app.po';

describe('ng5-algorithms App', () => {
  let page: Ng5AlgorithmsPage;

  beforeEach(() => {
    page = new Ng5AlgorithmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
