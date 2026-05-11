import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Add To Cart Feature', () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await page.goto('/inventory.html');
  });

  test('Add Single Item To Cart', async ({ page }) => {
    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(1);
    expect(
      await cartPage.isItemVisible('Sauce Labs Backpack')
    ).toBeTruthy();
  });

  test('Add Multiple Items To Cart', async ({ page }) => {
    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.addItem('Sauce Labs Bike Light');
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(2);
    expect(
      await cartPage.isItemVisible('Sauce Labs Backpack')
    ).toBeTruthy();
    expect(
      await cartPage.isItemVisible('Sauce Labs Bike Light')
    ).toBeTruthy();
  });

});