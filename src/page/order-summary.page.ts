import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor () {
    this.orderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    return this.orderTitleLabel.getText();
  }
}
