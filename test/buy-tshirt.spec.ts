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

  describe('Open the page in the browser', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });

  describe('T-shirt purchase process', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectFirstItem();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
  });

  describe('Sign in to the app', async () => {
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
  });

  describe('Select the default address', async () => {
    await addressStepPage.proceedToCheckout();
    await shippingStepPage.acceptAndContinue();
  });

  describe('Payment at the bank', async () => {
    await paymentStepPage.payByBankWire();
    await bankPaymentPage.confirmOrder();

    it('then should be bought a t-shirt', async () => {
      await expect(orderSummaryPage.getOrderTitle()).toBe('Your order on My Store is complete.');
    });
  });

});
