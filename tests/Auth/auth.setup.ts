import { test as setup, expect } from "@playwright/test";

const BaseUrl = process.env.BASE_URL || "https://www.saucedemo.com/";

setup("authenticate firefox", async ({ browser, browserName }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(BaseUrl);
  await page.fill("#user-name", process.env.USERNAME1 ?? "standard_user");
  await page.fill("#password", process.env.PASSWORD1 ?? "secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL(/inventory/);

  if (browserName === "firefox") {
    await context.storageState({ path: "auth/firefox.json" });
  }

  if (browserName === "chromium") {
    await context.storageState({ path: "auth/chromium.json" });
  }

  await context.close();
});