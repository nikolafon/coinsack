import { CoinsackPage } from './app.po';

describe('coinsack App', () => {
  let page: CoinsackPage;

  beforeEach(() => {
    page = new CoinsackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('COINSACK');
  });
});
