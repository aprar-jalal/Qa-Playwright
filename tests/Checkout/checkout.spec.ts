import { test } from '@playwright/test';

import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Checkout Feature', () => {

  let inventory: InventoryPage;
  let cart: CartPage;
  let checkout: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);
    await page.goto('/inventory.html');
  });

  test('Checkout single item', async () => {
    await inventory.addItem('Sauce Labs Backpack');
    await inventory.goToCart();
    await checkout.openCheckout();
    await checkout.fillInformation('John', 'Doe', '12345');
    await checkout.continue();
    await checkout.finish();
    await checkout.verifyOrderSuccess();
  });

  test('Checkout multiple items', async () => {
    await inventory.addItem('Sauce Labs Backpack');
    await inventory.addItem('Sauce Labs Bike Light');
    await inventory.goToCart();
    await checkout.openCheckout();
    await checkout.fillInformation('John', 'Doe', '12345');
    await checkout.continue();
    await checkout.finish();
    await checkout.verifyOrderSuccess();
  });

});