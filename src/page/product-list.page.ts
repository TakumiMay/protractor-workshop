import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('.ajax_add_to_cart_button > span');
  }

  public async selectFirstItem(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton));
    await this.addToCartButton.click();
  }
}
