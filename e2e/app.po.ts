import { browser, by, element } from 'protractor';

export class CoinsackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root')).getText();
  }
}
