import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Sort Feature', () => {

  let inventory: InventoryPage;
  test.beforeEach(async ({ page }) => {
    inventory = new InventoryPage(page);
    await page.goto('/inventory.html');
  });

test.describe('Sort Feature A-Z or Z-A', ()=>{
  test('Sort items A to Z', async () => {
    await inventory.sort('az');
    const items = await inventory.getItemNames();
    const sorted = [...items].sort((a, b) =>
      a.localeCompare(b)
    );
    expect(items).toEqual(sorted);
  });
test('Sort items Z to A', async () => {
    await inventory.sort('za');
    const items = await inventory.getItemNames();
    const sorted = [...items].sort((a, b) =>
      b.localeCompare(a)
    );
    expect(items).toEqual(sorted);
  });
})
  
test.describe('Sort Feature According to Price', ()=>{
  test('Sort price High to Low', async () => {
    await inventory.sort('hilo');
    const prices = await inventory.getItemPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });

  
  test('Sort price Low to High', async () => {
    await inventory.sort('lohi');
    const prices = await inventory.getItemPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

})
});