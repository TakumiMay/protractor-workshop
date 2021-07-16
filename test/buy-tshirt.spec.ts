import { browser } from 'protractor';
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectFirstItem();
    await(browser.sleep(3000));
    await productAddedModalPage.proceedToCheckout();
    await(browser.sleep(3000));
    await summaryStepPage.proceedToCheckout();
    await(browser.sleep(3000));
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));
    await addressStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    await shippingStepPage.acceptAndContinue();
    await (browser.sleep(3000));

    await paymentStepPage.payByBankWire();
    await (browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await (browser.sleep(3000));

    await expect(orderSummaryPage.getOrderTitle()).toBe('Your order on My Store is complete.');
  });
});
