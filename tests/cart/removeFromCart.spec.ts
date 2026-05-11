import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Remove From Cart Feature', () => {

  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {

    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await page.goto('/inventory.html');
  });

  test('Remove Single Item From Cart', async ({ page }) => {

    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(1);
    await cartPage.removeItem('Sauce Labs Backpack');
    expect(await cartPage.getCartItemsCount()).toBe(0);
  });

  test('Remove Multiple Items From Cart', async ({ page }) => {
    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.addItem('Sauce Labs Bike Light');
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemsCount()).toBe(2);
    await cartPage.removeItem('Sauce Labs Backpack');
    expect(await cartPage.getCartItemsCount()).toBe(1);
    expect(
      await cartPage.isItemVisible('Sauce Labs Bike Light')
    ).toBeTruthy();
    await cartPage.removeItem('Sauce Labs Bike Light');
    expect(await cartPage.getCartItemsCount()).toBe(0);
  });

});