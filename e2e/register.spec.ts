import { Helper } from './helper';
import { browser, by, element } from 'protractor';

describe('Registeration Page', () => {
  let page: Helper;

  beforeEach(() => {
    page = new Helper();
  });

  /**Register Page**/
  it('should Navigate to register page', () => {

    page.navigateToLogin();
    browser.sleep(1000);
    element(by.className('register-link')).click();

    expect(page.getContentByClass('register-name-label')).toEqual('Full Name');
    expect(page.getContentByClass('register-email-label')).toEqual('Email');    
    expect(page.getContentByClass('register-username-label')).toEqual('Username');
    expect(page.getContentByClass('register-password-label')).toEqual('Password');
  });

  it('should show error message for wrong credentials', () => {

    element(by.className('register-name-input')).sendKeys('');
    element(by.className('register-email-input')).sendKeys('');
    element(by.className('register-username-input')).sendKeys('');
    element(by.className('register-password-input')).sendKeys('');    
    expect(element(by.className('name-req')).isDisplayed()).toBeTruthy();
  });

  it('should navigate back to login page', () => {

    element(by.className('register-name-input')).sendKeys('Amit Agarwal');
    element(by.className('register-email-input')).sendKeys('amitagrwal@test.com');
    element(by.className('register-username-input')).sendKeys('admin');
    element(by.className('register-password-input')).sendKeys('admin');
    element(by.className('register-btn')).click();

    expect(page.getContentByCss('header')).toEqual('Admin');    
  });
});
