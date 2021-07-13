import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(() => {
      browser.driver.get('http://www.google.com');
    });

    it('then should have a title', () => {
      expect(browser.driver.getTitle()).toEqual('Google');
    });
  });
});
