import { Helper } from './helper';
import { browser, by, element } from 'protractor';

describe('Login Page', () => {
  let page: Helper;

  beforeEach(() => {
    page = new Helper();
  });

  /**Login Page**/
  it('should display Login page', () => {

    page.navigateToLogin();
    browser.sleep(1000);
    expect(page.getContentByCss('header')).toEqual('Admin');
    expect(page.getContentByCss('footer')).toEqual('© Copyright information');
  });

  it('should show error message for wrong credentials', () => {

    element(by.css('input[formcontrolname="username"]')).sendKeys('');
    element(by.css('input[formcontrolname="password"]')).sendKeys('');
    expect(element(by.className('admin-row__req-error')).isDisplayed()).toBeTruthy();
  });

  it('should show global error page when admin is not registered', () => {

    element(by.css('input[formcontrolname="username"]')).sendKeys('admin');
    element(by.css('input[formcontrolname="password"]')).sendKeys('admin');
    element(by.className('admin-row__btn')).click();
    browser.sleep(1000);
    expect(page.getContentByClass('admin-form__global-error')).toEqual('Oops, credentials mismatch!');
  });

  it('should Navigate to register page', () => {

    element(by.className('admin-row__link')).click();
    expect(element(by.className('admin-row__label')).isDisplayed()).toBeTruthy();
  });
});
