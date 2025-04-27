import { test, expect } from "@playwright/test";

test("frontend-backend integration", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Hello from Fastapi")).toBeVisible();
});
