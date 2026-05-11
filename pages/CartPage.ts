import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemsCount() {
    return await this.page.locator('.cart_item').count();
  }

  async isItemVisible(itemName: string) {
    return await this.page
      .locator('.inventory_item_name')
      .filter({ hasText: itemName })
      .isVisible();
  }

  async removeItem(itemName: string) {
    const item = this.page
      .locator('.cart_item')
      .filter({ hasText: itemName });

    await item.getByRole('button').click();
  }
}