import { test, expect } from "@playwright/test";

const ROUTES = [
  { path: "/", title: /JW Games|Texte du jour/i },
  { path: "/etude", title: /Étude|étude/i },
  { path: "/jeux/quiz", title: /quiz|Quiz/i },
  { path: "/mediatheque", title: /Médiathèque|Vidéos/i },
  { path: "/profil", title: /profil|Profil/i },
];

for (const route of ROUTES) {
  test(`smoke: ${route.path} charge sans erreur`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main")).toBeVisible();
    await expect(page).toHaveTitle(route.title);
  });
}

test("visuel: accueil capture screenshot", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main")).toBeVisible();
  await expect(page).toHaveScreenshot("home.png", { maxDiffPixelRatio: 0.05 });
});
