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

  describe('Given an online store', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });

  describe('When a user wants to buy a T-Shirt', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectFirstItem();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
  });

  describe('And sign in to his/her account', async () => {
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
  });

  describe('Selects the default address', async () => {
    await addressStepPage.proceedToCheckout();
    await shippingStepPage.acceptAndContinue();
  });

  describe('And chooses the bankwire payment type', async () => {
    await paymentStepPage.payByBankWire();
    await bankPaymentPage.confirmOrder();

    it('Then the t-shirt must have been successfully bought', async () => {
      await expect(orderSummaryPage.getOrderTitle()).toBe('Your order on My Store is complete.');
    });
  });

});
