import { browser, by, element } from 'protractor';

export class Helper {
  navigateToLogin () {
    return browser.get('/');
  }
  navigateToRegister () {
    return browser.get('/register');
  }

  getContentByCss (cssSelector) {
    return element(by.css(cssSelector)).getText();
  }

  getContentByClass (classSelector) {
    return element(by.className(classSelector)).getText();
  }
  getContentByTagName (tagName) {
    return element(by.tagName(tagName)).getText();
  }
}
