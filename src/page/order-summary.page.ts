import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor () {
    this.orderTitleLabel = $('.cheque-indent > .dark');
  }

  public async getOrderTitle(): Promise<string> {
    return this.orderTitleLabel.getText();
  }
}
