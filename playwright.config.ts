import { defineConfig } from '@playwright/test';

// Playwright tenta baixar browsers compatíveis com o SO.
// No Ubuntu 26.04 pode falhar; então, se você já tiver um chromium instalado,
// basta exportar PLAYWRIGHT_CHROMIUM_PATH para o caminho do binário.
const chromiumExecutablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH;

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:5173',
    ...(chromiumExecutablePath
      ? {
          launchOptions: {
            executablePath: chromiumExecutablePath,
          },
        }
      : {}),
  },
  webServer: {
    command: 'npm run dev -- --port 5173 --strictPort',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

