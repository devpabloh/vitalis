import { test, expect } from '@playwright/test';

test('home carrega e mostra conteúdo', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: /sobre/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /saúde corporativa como/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /fale comigo/i })).toHaveAttribute('href', '#contato');
});

