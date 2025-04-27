import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("frontend-backend integration", () => {
  test("frontend-backend integration", async ({ page }) => {
    await expect(page.getByText("Hello from Fastapi")).toBeVisible();
  });
});
