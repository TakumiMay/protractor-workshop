import { browser } from 'protractor';

describe('This is the first example of protractor', () => {
  it('should have a title', () => {
      browser.driver.get('http://www.google.com');
      expect(browser.driver.getTitle()).toEqual('Google');
  });
});
