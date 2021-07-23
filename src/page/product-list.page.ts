import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('[title="Add to cart"]');
  }

  public async selectFirstItem(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton));
    await this.addToCartButton.click();
  }
}
