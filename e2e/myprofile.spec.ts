import { Helper } from './helper';
import { browser, by, element } from 'protractor';

describe('My Profile Page', () => {
  let page: Helper;
  beforeEach(() => {
    page = new Helper();
  });
  /**Myprofile Page**/
  it('should display myprofile page', () => {
    page.navigateToLogin();
    browser.sleep(1000);
    element(by.className('login-username-input')).sendKeys('admin');
    element(by.className('login-password-input')).sendKeys('admin');
    element(by.className('login-btn')).click();
    browser.sleep(1000);
    expect(page.getContentByClass('myprofile-message')).toEqual('Welcome to Admin profile page!');
  });
});
