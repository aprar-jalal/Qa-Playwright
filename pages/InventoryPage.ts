import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

async addItem(itemName: string) {
  await this.page
    .locator('.inventory_item', { hasText: itemName })
    .getByRole('button')
    .click();
}

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

   async sort(option: string) {
    await this.page.selectOption('.product_sort_container', option);
  }

  async getItemNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async getItemPrices() {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(p => Number(p.replace('$', '')));
  }
}
