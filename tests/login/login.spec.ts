import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const loginData = [
  {
    username: process.env.USERNAME1 || '',
    password: process.env.PASSWORD1 || '',
    expectedUrl: /inventory.html/,
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    error: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    username: '',
    password: '',
    error: 'Epic sadface: Username is required',
  },
  {
    username: 'wrong_user',
    password: 'wrong_pass',
    error: 'Epic sadface: Username and password do not match',
  },
];

test.describe('Login Feature', () => {

  for (const data of loginData) {

    test(`Login with ${data.username || 'empty credentials'}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.goto();

      await loginPage.login(data.username, data.password);

      if (data.expectedUrl) {
        await expect(page).toHaveURL(data.expectedUrl);
      }

      if (data.error) {
        await expect(page.locator('[data-test="error"]'))
          .toContainText(data.error);
      }

    });

  }

});