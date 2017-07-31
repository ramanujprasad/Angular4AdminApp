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
    expect(page.getContentByClass('login-username-label')).toEqual('Username');
    expect(page.getContentByClass('login-password-label')).toEqual('Password');    
    expect(page.getContentByCss('footer')).toEqual('©Copyright information');
  });

  it('should show error message for wrong credentials', () => {

    element(by.className('login-username-input')).sendKeys('');
    element(by.className('login-password-input')).sendKeys('');    
    expect(element(by.className('username-req')).isDisplayed()).toBeTruthy();
  });

  it('should navigate to myprofile page', () => {

    element(by.className('login-username-input')).sendKeys('admin');
    element(by.className('login-password-input')).sendKeys('admin');
    element(by.className('login-btn')).click();
    
    browser.sleep(1000);   
    expect(page.getContentByClass('myprofile-message')).toEqual('Welcome to Admin profile page!');    
  });
});
