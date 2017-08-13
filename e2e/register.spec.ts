import { Helper } from './helper';
import { browser, by, element } from 'protractor';

describe('Registeration Page', () => {
  let page: Helper;
  beforeEach(() => {
    page = new Helper();
  });

  /**Register Page**/
  it('should Navigate to register page', () => {

    page.navigateToRegister();
    browser.sleep(1000);
    expect(element(by.className('admin-row__label')).isDisplayed()).toBeTruthy();
  });

  it('should show error message for wrong credentials', () => {

    element(by.css('input[formcontrolname="name"]')).sendKeys('');
    element(by.css('input[formcontrolname="email"]')).sendKeys('');
    element(by.css('input[formcontrolname="username"]')).sendKeys('');
    element(by.css('input[formcontrolname="password"]')).sendKeys('');
    expect(element(by.className('admin-row__req-error')).isDisplayed()).toBeTruthy();
  });

  it('should navigate back to login page', () => {

    element(by.css('input[formcontrolname="name"]')).sendKeys('Amit Agarwal');
    element(by.css('input[formcontrolname="email"]')).sendKeys('amitagrwal@test.com');
    element(by.css('input[formcontrolname="username"]')).sendKeys('admin');
    element(by.css('input[formcontrolname="password"]')).sendKeys('admin');
    element(by.className('admin-row__btn')).click();
    expect(page.getContentByCss('header')).toEqual('Admin');
  });

});
