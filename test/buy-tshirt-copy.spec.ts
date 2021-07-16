import { $, browser } from 'protractor';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await $('#block_top_menu > ul > li:nth-child(3) > a').click(); // menuContentPage
    await(browser.sleep(3000));
    await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click(); // productListPage
    await(browser.sleep(3000));
    await $('[style*="display: block;"] .button-container > a').click(); // productAddedModalPage
    await(browser.sleep(3000));
    await $('.cart_navigation span').click(); // summaryStepPage
    await(browser.sleep(3000));

    await $('#email').sendKeys('aperdomobo@gmail.com'); // signInStepPage
    await $('#passwd').sendKeys('WorkshopProtractor'); // signInStepPage
    await $('#SubmitLogin > span').click(); // signInStepPage
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click(); // addressStepPage
    await(browser.sleep(3000));

    await $('#cgv').click(); // shippingStepPage
    await(browser.sleep(3000));

    await $('#form > p > button > span').click(); // shippingStepPage
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click(); // paymentStepPage
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click(); // bankPaymentPage
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.'); // orderSummaryPage
  });
});
