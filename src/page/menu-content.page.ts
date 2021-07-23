import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.tShirtMenu));
    await this.tShirtMenu.click();
  }
}
